import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { templates as allTemplates } from "@typebot.io/templates";

export const Route = createFileRoute("/_layout/templates/")({
  component: TemplatesPage,
});

function TemplatesPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return allTemplates;
    const q = search.toLowerCase();
    return allTemplates.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category?.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            TEMPLATES
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            模板库
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            从精选模板快速开始，或从头创建您自己的对话流程。
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索模板..."
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#3B82F6] text-slate-700 transition"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-2xl text-slate-400 mb-4">
              <i className="fa-solid fa-folder-open" />
            </div>
            <p className="text-sm text-slate-400">没有找到匹配的模板</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((template) => (
              <Link
                key={template.slug}
                to="/templates/$slug"
                params={{ slug: template.slug }}
                className="glow-card p-6 rounded-2xl smooth-transition block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{template.emoji}</span>
                  <h3 className="text-sm font-bold text-slate-800">
                    {template.name}
                  </h3>
                </div>
                {template.category && (
                  <span className="inline-block text-[9px] font-bold text-[#3B82F6] bg-[#f0f6ff] px-2 py-0.5 rounded-full mb-3">
                    {template.category}
                  </span>
                )}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {template.description ?? template.excerpt ?? ""}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
