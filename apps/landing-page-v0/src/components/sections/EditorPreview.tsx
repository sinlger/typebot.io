import { Flag, Briefcase, CreditCard, HelpCircle } from "lucide-react";

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

        {/* 画布模拟 */}
        <div className="mt-14 relative bg-[#0b0f19] rounded-3xl shadow-2xl overflow-hidden">
          {/* 点阵背景 */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(#1e293b 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* 窗口控制栏 */}
          <div className="relative flex items-center gap-2 px-5 py-3.5 border-b border-slate-800/80">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-4 text-xs text-slate-400 font-mono">画布编辑：主获客线索流.flow</span>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              服务器同步正常
            </span>
          </div>

          {/* 画布节点区 */}
          <div className="relative px-6 md:px-16 py-14 min-h-[420px]">
            {/* SVG 流线 */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 120 80 C 280 80, 280 200, 440 200"
                stroke="#2dd4bf"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-flow-light"
              />
              <path
                d="M 560 200 C 700 200, 700 100, 820 100"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-flow-light"
              />
              <path
                d="M 560 200 C 700 200, 700 320, 820 320"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-flow-light"
              />
            </svg>

            {/* 节点：触发器 */}
            <div className="absolute left-4 md:left-16 top-10 w-48 bg-dark-900 rounded-2xl border border-slate-700/80 shadow-xl">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
                <Flag className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-slate-200">开始 / 触发器</span>
              </div>
              <div className="p-3 space-y-1.5">
                <div className="text-[10px] text-slate-500">触发条件</div>
                <div className="text-xs text-slate-300 bg-slate-800/60 rounded px-2 py-1">用户访问网站</div>
                <div className="text-[10px] text-slate-500 pt-1">执行动作</div>
                <div className="text-xs text-slate-300 bg-slate-800/60 rounded px-2 py-1">秒唤起弹窗</div>
              </div>
            </div>

            {/* 节点：获客引导问答（高亮） */}
            <div className="absolute left-1/2 -translate-x-1/2 top-32 w-56 bg-dark-900 rounded-2xl border-2 border-brand-500 shadow-xl shadow-brand-500/20">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
                <HelpCircle className="w-3.5 h-3.5 text-brand-400" />
                <span className="text-xs font-semibold text-slate-200">获客引导问答</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="text-xs text-slate-300 leading-relaxed bg-slate-800/60 rounded px-2 py-1.5">
                  “您好！今天想为您的企业定制哪种加速流方案？”
                </div>
                <div className="text-[10px] text-slate-500">选项分支</div>
                <div className="flex gap-1.5">
                  <span className="text-[10px] text-brand-300 bg-brand-500/10 border border-brand-500/30 rounded px-1.5 py-0.5">A 方案</span>
                  <span className="text-[10px] text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded px-1.5 py-0.5">B 方案</span>
                </div>
              </div>
            </div>

            {/* 节点：收集部署环境 */}
            <div className="absolute right-4 md:right-16 top-12 w-48 bg-dark-900 rounded-2xl border border-slate-700/80 shadow-xl">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">去往：收集部署环境</span>
              </div>
              <div className="p-3">
                <div className="text-[10px] text-slate-500 mb-1">Webhook 节点</div>
                <div className="text-xs text-slate-400 leading-relaxed">新线索实时推送至企业飞书群</div>
              </div>
            </div>

            {/* 节点：引导套餐升级 */}
            <div className="absolute right-4 md:right-16 bottom-6 w-48 bg-dark-900 rounded-2xl border border-slate-700/80 shadow-xl">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
                <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-semibold text-slate-200">去往：引导套餐升级</span>
              </div>
              <div className="p-3 space-y-1.5">
                <div className="text-[10px] text-slate-500">套餐链接</div>
                <div className="text-xs text-slate-300 bg-slate-800/60 rounded px-2 py-1">跳转企业协作 Pro</div>
                <div className="text-[10px] text-emerald-400 pt-1">漏斗转化：68%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
