import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import css from "@/assets/globals.css?url";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "stylesheet", href: css },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "快境 TypeFlow | 专为国内小企业定制的 AI 对话式留资与私域获客 SaaS 系统",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-50/50 text-slate-800 font-sans antialiased overflow-x-hidden">
        {/* Aurora background effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-200/50 rounded-full aurora" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-100/60 rounded-full aurora" />
        <div className="absolute top-2/3 left-10 w-[600px] h-[600px] bg-emerald-50/80 rounded-full aurora" />

        <div className="flex flex-col min-h-screen relative z-10">
          <Header />
          <main className="flex-1 pt-16">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
