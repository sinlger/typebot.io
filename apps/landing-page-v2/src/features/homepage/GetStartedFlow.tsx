export default function GetStartedFlow() {
  return (
    <section
      id="get-started-flow"
      className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            SIMPLE THREE STEPS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            开始使用 TypeFlow
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            极其简单、开箱即用的配置逻辑，仅需三步即可构建完备的私域留资雷达。
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between smooth-transition hover:shadow-md">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-400 via-rose-400 to-pink-500 flex items-center justify-center border border-pink-200">
              <div className="px-6 py-2.5 bg-orange-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/30 flex items-center gap-1">
                <span>Sign up</span>
              </div>
              <div className="absolute bottom-12 right-24 text-slate-900 text-lg drop-shadow">
                <i className="fa-solid fa-mouse-pointer animate-bounce" />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-bold text-slate-900">第一步</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                创建您的账户并选择套餐——您可以注册无风险试用
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between smooth-transition hover:shadow-md">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-tr from-slate-950 to-slate-900 flex items-center justify-center p-4 border border-slate-800">
              <div className="flex items-center space-x-4 w-full justify-center">
                <div className="px-2.5 py-1.5 bg-slate-800 rounded-md border border-slate-700 text-[9px] text-slate-400 font-mono">
                  💬 Start
                </div>
                <div className="h-0.5 w-6 bg-[#3B82F6] relative">
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#3B82F6]" />
                </div>
                <div className="px-2.5 py-1.5 bg-[#3B82F6]/20 rounded-md border border-[#3B82F6]/40 text-[9px] text-blue-400 font-mono">
                  📱 Phone Verify
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-bold text-slate-900">第二步</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                从我们的库中选择模板，或者从头开始。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between smooth-transition hover:shadow-md">
            <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-tr from-purple-500 via-pink-400 to-rose-400 flex items-center justify-center border border-purple-200">
              <div className="px-6 py-2.5 bg-orange-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/30">
                Publish
              </div>
              <div className="absolute bottom-12 right-24 text-slate-900 text-lg drop-shadow">
                <i className="fa-solid fa-mouse-pointer animate-bounce" />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-bold text-slate-900">第三步</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                实时构建和测试你的聊天内容。准备好发射了吗？只需点击发布即可！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
