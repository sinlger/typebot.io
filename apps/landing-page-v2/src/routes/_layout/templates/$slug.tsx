import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { templates } from "@typebot.io/templates";

export const Route = createFileRoute("/_layout/templates/$slug")({
  loader: ({ params }) => {
    const template = templates.find((t) => t.slug === params.slug);
    if (!template) throw redirect({ to: "/templates" });
    return { template };
  },
  component: TemplateDetailPage,
});

function TemplateDetailPage() {
  const { template } = Route.useLoaderData();

  const relatedTemplates = templates
    .filter((t) => t.slug !== template.slug && t.category === template.category)
    .slice(0, 3);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/templates"
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#3B82F6] transition mb-8"
        >
          <i className="fa-solid fa-arrow-left text-[9px]" />
          返回模板库
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl">{template.emoji}</span>
          <div>
            <h1 className="text-2xl font-black text-slate-900">{template.name}</h1>
            {template.category && (
              <span className="inline-block text-[10px] font-bold text-[#3B82F6] bg-[#f0f6ff] px-2.5 py-0.5 rounded-full mt-1">
                {template.category}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        {template.description && (
          <div className="prose prose-sm max-w-none text-slate-600 mb-10">
            <p className="text-sm leading-relaxed">{template.description}</p>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#f0f6ff] to-indigo-50 rounded-2xl p-8 text-center space-y-4 mb-12">
          <h2 className="text-lg font-bold text-slate-900">使用此模板开始构建</h2>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl smooth-transition shadow-md shadow-blue-500/10 text-sm"
          >
            使用此模板
            <i className="fa-solid fa-arrow-right ml-1.5 text-xs" />
          </a>
        </div>

        {/* Related */}
        {relatedTemplates.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-6">相关模板</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedTemplates.map((t) => (
                <Link
                  key={t.slug}
                  to="/templates/$slug"
                  params={{ slug: t.slug }}
                  className="glow-card p-5 rounded-2xl smooth-transition block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{t.emoji}</span>
                    <h3 className="text-sm font-bold text-slate-800">{t.name}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {t.description ?? ""}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
