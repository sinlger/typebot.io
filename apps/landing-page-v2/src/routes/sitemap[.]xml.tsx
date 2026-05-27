import { createAPIFileRoute } from "@tanstack/react-start/api";
import { templates } from "@typebot.io/templates";

const STATIC_PAGES = ["/", "/pricing", "/about", "/templates"];

export const APIRoute = createAPIFileRoute("/sitemap.xml")({
  GET: async () => {
    const baseUrl =
      process.env.VITE_LANDING_PAGE_BASE_URL ?? "https://typebot.com";

    const urls = [
      ...STATIC_PAGES.map((page) => ({
        loc: `${baseUrl}${page}`,
        changefreq: "weekly",
        priority: page === "/" ? "1.0" : "0.8",
      })),
      ...templates.map((t) => ({
        loc: `${baseUrl}/templates/${t.slug}`,
        changefreq: "monthly" as const,
        priority: "0.6",
      })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
});
