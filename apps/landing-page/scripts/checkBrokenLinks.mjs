import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import micromatch from "micromatch";
import path from "node:path";

const [, , contentDirArg = "content", publicDirArg = "public", ignorePattern] =
  process.argv;

const cwd = process.cwd();
const contentDir = path.resolve(cwd, contentDirArg);
const publicDir = path.resolve(cwd, publicDirArg);

const files = [];
const errors = [];

const walk = (directoryPath) => {
  for (const entry of readdirSync(directoryPath)) {
    const fullPath = path.join(directoryPath, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (fullPath.endsWith(".md") || fullPath.endsWith(".mdx")) files.push(fullPath);
  }
};

const stripCodeBlocks = (content) => content.replace(/```[\s\S]*?```/g, "");

const stripLinkDecorations = (link) => link.split("#")[0]?.split("?")[0] ?? link;

const shouldIgnore = (link) => {
  if (!ignorePattern) return false;

  const candidateLinks = [link];

  if (link === "/") candidateLinks.push("/index.mdx");
  if (link.endsWith("/")) candidateLinks.push(`${link}index.mdx`);

  return candidateLinks.some((candidateLink) =>
    micromatch.isMatch(candidateLink, ignorePattern),
  );
};

const extractLinks = (content) => {
  const matches = [];

  for (const match of content.matchAll(/\[[^\]]*?\]\(([^)]+)\)/g)) {
    const link = match[1]?.trim();
    if (link) matches.push(link);
  }

  for (const match of content.matchAll(/\b(?:href|to|src)=["']([^"']+)["']/g)) {
    const link = match[1]?.trim();
    if (link) matches.push(link);
  }

  return matches;
};

const candidatePathsForRelativeLink = (sourceFilePath, rawLink) => {
  const sanitizedLink = stripLinkDecorations(rawLink);
  const baseDirectory = path.dirname(sourceFilePath);
  const resolvedPath = path.resolve(baseDirectory, sanitizedLink);

  if (path.extname(resolvedPath)) return [resolvedPath];

  return [
    resolvedPath,
    `${resolvedPath}.mdx`,
    `${resolvedPath}.md`,
    path.join(resolvedPath, "index.mdx"),
    path.join(resolvedPath, "index.md"),
  ];
};

const candidatePathsForRootLink = (rawLink) => {
  const sanitizedLink = stripLinkDecorations(rawLink).replace(/^\/+/, "");

  if (!sanitizedLink) return [];

  const publicPath = path.resolve(publicDir, sanitizedLink);
  const contentPath = path.resolve(contentDir, sanitizedLink);

  return [
    publicPath,
    contentPath,
    `${contentPath}.mdx`,
    `${contentPath}.md`,
    path.join(contentPath, "index.mdx"),
    path.join(contentPath, "index.md"),
  ];
};

walk(contentDir);

for (const filePath of files) {
  const content = stripCodeBlocks(readFileSync(filePath, "utf8"));
  const links = extractLinks(content);

  for (const link of links) {
    if (
      link.startsWith("http://") ||
      link.startsWith("https://") ||
      link.startsWith("mailto:") ||
      link.startsWith("#") ||
      /^[^:]+:/.test(link)
    ) {
      continue;
    }

    if (shouldIgnore(link)) continue;

    const candidatePaths = link.startsWith("/")
      ? candidatePathsForRootLink(link)
      : candidatePathsForRelativeLink(filePath, link);

    if (candidatePaths.some((candidatePath) => existsSync(candidatePath))) continue;

    errors.push(
      `Link is broken: '${link}' in file ${path.relative(cwd, filePath).replaceAll("\\", "/")}`,
    );
  }
}

if (errors.length > 0) {
  for (const error of [...new Set(errors)]) console.error(error);
  process.exit(1);
}
