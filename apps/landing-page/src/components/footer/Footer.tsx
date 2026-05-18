import { TextLink } from "@/components/link";
import { TypebotLogoFull } from "@/components/TypebotLogo";
import { docsUrl } from "../../constants";
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
    <footer className="dark flex flex-col pb-6">
      <img src={gradientSeparatorSrc} alt="分隔线" className="w-full h-2" />
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-4 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6">
          <TypebotLogoFull className="shrink-0" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {data.flatMap((item) => item.links).map((link) => (
              <TextLink
                key={link.label}
                href={"href" in link ? link.href : undefined}
                to={"to" in link ? link.to : undefined}
                params={"params" in link ? link.params : undefined}
                target={"href" in link ? "_blank" : undefined}
                className="text-muted-foreground font-normal"
                size="sm"
              >
                {link.label}
              </TextLink>
            ))}
          </nav>
          <p className="text-foreground/70 text-sm shrink-0">
            版权所有 2025 - Typebot
          </p>
        </div>
      </div>
    </footer>
  );
};
