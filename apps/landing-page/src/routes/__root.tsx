import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useNavigate,
} from "@tanstack/react-router";
import { z } from "zod";
import css from "@/assets/globals.css?url";
import { CookieConsentBot } from "@/components/CookieConsentBot";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/Header";
import { NotFound } from "@/components/NotFound";
import { setCookie } from "@/helpers/setCookie";
import { useCookieConsentStatus } from "@/hooks/useIsCookieConsentNeeded";
import { useTrackPageViewQuery } from "@/hooks/useTrackPageViewQuery";

const HERO_ANIMATION_DELAY = 1800;

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "stylesheet", href: css },
      {
        rel: "icon",
        type: "images/svg+xml",
        href: "/images/favicon.svg",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Typebot",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  validateSearch: z.object({
    isHeaderOpened: z.boolean().optional(),
  }),
});

function RootComponent() {
  const { cookieConsentStatus, setCookieConsentStatus } =
    useCookieConsentStatus();

  useTrackPageViewQuery({
    enabled:
      cookieConsentStatus === "not-needed" ||
      cookieConsentStatus === "accepted",
  });

  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16">
            <Outlet />
          </main>
          <Footer />
          <CookieConsentBot
            isOpen={cookieConsentStatus === "need-consent"}
            openDelay={HERO_ANIMATION_DELAY}
            onSubmit={(response) => {
              void setCookie(response).catch(console.error);
              setCookieConsentStatus(response);
            }}
          />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
