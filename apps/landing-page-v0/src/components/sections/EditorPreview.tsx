export function EditorPreview() {
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

        {/* 动画占位区：此处将内嵌编排画布动画 */}
        <div
          className="mt-14 flex items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 min-h-105 md:min-h-130"
          data-slot="editor-preview-mount"
        >
          <span className="text-sm text-slate-400">编排画布动画将内嵌于此处</span>
        </div>
      </div>
    </section>
  );
}
