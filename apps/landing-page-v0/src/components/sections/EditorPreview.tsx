import { useState } from "react";

const tabs = [
  { key: "qa", label: "产品问答", image: "/images/GaDrKw5p31cO4okm.png" },
  { key: "support", label: "智能客服", image: "/images/VvXricTVwTAJeng6.png" },
  { key: "recommend", label: "产品推荐", image: "/images/huix7Mj53zn9Elki.png" },
  { key: "survey", label: "问卷调查", image: "/images/Xo7AF4DUTg4hLd7o.png" },
];

export function EditorPreview() {
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section id="editor-preview" className="py-20 md:py-28 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-widest">
            零依赖 · 可视化
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">精心设计的编排画布</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            直观、现代的多分支画布。这是您管理会话节点的强大阵地。
          </p>
        </div>

        {/* 场景 Tab 切换 */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === t.key
                ? "bg-brand-600 text-white shadow-md shadow-brand-500/20"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* 画布截图展示区：image 留空时显示占位 */}
        <div
          className="mt-8 relative rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 min-h-105 md:min-h-150 overflow-hidden"
          data-slot="editor-preview-mount"
        >
          <div key={active} className="absolute inset-0 animate-in fade-in duration-300">
            {activeTab.image ? (
              <img src={activeTab.image} alt={activeTab.label} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-sm text-slate-400">「{activeTab.label}」流程截图（待补充）</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
