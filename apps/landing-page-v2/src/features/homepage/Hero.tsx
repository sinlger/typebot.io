export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f6ff] border border-blue-100 text-[#2563EB] text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              全面对齐 Typebot 标准 · 国内中小企业专属版
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug text-slate-900">
              像拼积木一样，
              <br className="hidden sm:inline" />
              搭建 <span className="gradient-text">高转化率</span> 的 AI 微信获客留资流
            </h1>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              快境 TypeFlow 完美引入 Typebot 清新视觉构建逻辑。针对国情深度调优，打通
              <b>微信客服、企微扫码一键唤醒、手机格式验证、无感未完成留资实时捕获</b>
              。把高成本引来的流量，锁定在您的私域蓄水池。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl smooth-transition shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 group text-sm"
              >
                零门槛，免费创建第一个对话流
                <i className="fa-solid fa-arrow-right ml-1.5 group-hover:translate-x-1 smooth-transition text-xs" />
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl smooth-transition text-sm shadow-sm"
              >
                <i className="fa-solid fa-calculator mr-1.5 text-[#3B82F6]" />
                模拟获客 ROI
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-6 space-y-2">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                国内 2000+ 网店商家、本地生活、获客小团队的选择
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-slate-500 text-xs font-medium">
                <span>
                  <i className="fa-solid fa-shield-halved text-[#3B82F6] mr-1" />{" "}
                  全面对齐 Typebot 格式
                </span>
                <span>
                  <i className="fa-brands fa-weixin text-emerald-500 mr-1" />{" "}
                  企业微信/微信客服官方集成
                </span>
                <span>
                  <i className="fa-solid fa-circle-check text-indigo-500 mr-1" />{" "}
                  100% 数据本地加密安全
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image placeholder */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f0f6ff] to-indigo-100 rounded-2xl blur-lg opacity-40" />
            <div className="relative bg-white/90 border-2 border-dashed border-slate-200/80 rounded-2xl shadow-xl overflow-hidden min-h-[420px] flex flex-col justify-between p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 w-full">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-slate-200" />
                  <span className="text-[11px] text-slate-400 font-mono">
                    TypeFlow Visual Builder
                  </span>
                </div>
                <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold">
                  1200 x 850 (推荐尺寸)
                </span>
              </div>
              <div className="my-auto text-center space-y-4 px-4 py-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-sm">
                  <i className="fa-solid fa-diagram-project" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800">
                    【图片留空 1】TypeFlow 中文可视化拖拽工作流画布截图
                  </h4>
                  <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                    这里适合放置：展示拼木拖拽面板、条件连线，以及包含微信客服跳转节点、手机验证输入组件的中文高保真界面截图。
                  </p>
                </div>
                <div className="inline-flex gap-2 text-[10px] text-slate-400 bg-slate-50 border border-slate-200/50 px-3 py-1.5 rounded-lg">
                  <span>
                    <i className="fa-solid fa-image mr-1" /> 推荐 PNG / 静态图
                  </span>
                  <span>|</span>
                  <span>
                    <i className="fa-solid fa-palette mr-1" /> 浅色干净风设计风格
                  </span>
                </div>
              </div>
              <div className="bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">
                  💡 提示：找一张具有多个分支连线，且末端有"企业微信客服分配"图标的精美中文后台截图。
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
