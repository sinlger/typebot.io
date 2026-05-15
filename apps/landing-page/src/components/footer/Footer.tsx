import { TextLink } from "@/components/link";
import { TypebotLogoFull } from "@/components/TypebotLogo";
import {
  blueskyUrl,
  discordUrl,
  docsUrl,
  githubRepoUrl,
  linkedInUrl,
} from "../../constants";
import gradientSeparatorSrc from "./assets/gradient-separator.png";

const data = [
  {
    title: "产品",
    links: [
      {
        label: "文档",
        href: docsUrl,
      },
      {
        label: "定价",
        to: "/pricing",
      },
    ],
  },
  {
    title: "社区",
    links: [
      {
        label: "Discord",
        href: discordUrl,
      },
      {
        label: "博客",
        to: "/blog",
      },
      {
        label: "模板",
        to: "/templates",
      },
      {
        label: "GitHub",
        href: githubRepoUrl,
      },
      {
        label: "Bluesky",
        href: blueskyUrl,
      },
      {
        label: "LinkedIn",
        href: linkedInUrl,
      },
      {
        label: "开源伙伴",
        to: "/oss-friends",
      },
    ],
  },
  {
    title: "博客",
    links: [
      {
        label: "Lead Generation Chatbot",
        to: "/blog/$slug",
        params: {
          slug: "lead-generation-chatbot",
        },
      },
      {
        label: "Best Chatbot Builder",
        to: "/blog/$slug",
        params: {
          slug: "best-chatbot-builder",
        },
      },
      {
        label: "Create WhatsApp Chatbot",
        to: "/blog/$slug",
        params: {
          slug: "create-whatsapp-chatbot",
        },
      },
      {
        label: "FAQ Chatbot",
        to: "/blog/$slug",
        params: {
          slug: "faq-chatbot",
        },
      },
      {
        label: "Landbot Alternative",
        to: "/blog/$slug",
        params: {
          slug: "landbot-alternative",
        },
      },
    ],
  },
  {
    title: "公司",
    links: [
      {
        label: "关于我们",
        to: "/about",
      },
      {
        label: "服务条款",
        to: "/$slug",
        params: {
          slug: "terms-of-service",
        },
      },
      {
        label: "隐私政策",
        to: "/$slug",
        params: {
          slug: "privacy-policy",
        },
      },
      {
        label: "业务连续性",
        to: "/$slug",
        params: {
          slug: "business-continuity",
        },
      },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer className="dark flex flex-col pb-12">
      <img src={gradientSeparatorSrc} alt="分隔线" className="w-full h-2" />
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-4 w-full">
        <div className="flex flex-col md:flex-row gap-12 py-12 items-start">
          <TypebotLogoFull className="mt-1" />
          <div className="flex flex-col md:flex-row gap-8 md:justify-around w-full">
            {data.map((item) => (
              <div className="flex flex-col gap-3" key={item.title}>
                <h3 className="text-2xl">{item.title}</h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <TextLink
                        href={"href" in link ? link.href : undefined}
                        to={"to" in link ? link.to : undefined}
                        params={"params" in link ? link.params : undefined}
                        target={"href" in link ? "_blank" : undefined}
                        className="text-muted-foreground font-normal"
                        size="sm"
                      >
                        {link.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-foreground/70 text-sm">
          版权所有 2025 - Typebot
        </p>
      </div>
    </footer>
  );
};
