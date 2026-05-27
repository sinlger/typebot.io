export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-white border-t border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            良心透明资费 · 对齐 Typebot 标准
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            轻松选，灵活搭，随时升级与降级
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            每一个套餐均完全公开透明。绝无任何隐性强制付费陷阱。
          </p>
        </div>

        {/* 3 plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-10">
          {/* Free */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <span className="bg-slate-900 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                PERSONAL
              </span>
              <h3 className="text-2xl font-black text-slate-900">Free</h3>
              <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                极适合小微项目冷启动或开发测试，完全免费体验功能。
              </p>
              <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-700">
                <CheckItem>无限制创建对话流 (Unlimited typebots)</CheckItem>
                <CheckItem>
                  <b>200 次/月</b> 免费对话量
                </CheckItem>
                <CheckItem>支持通用平台原生接口集成</CheckItem>
                <CheckItem>开放标准 Webhooks 接口</CheckItem>
                <CheckItem>支持自定义 CSS 与 Javascript 编写</CheckItem>
                <CheckItem>中文文档库支持 & 社区问答</CheckItem>
              </div>
            </div>
            <a
              href="#demo"
              className="mt-8 w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs text-center smooth-transition shadow-sm block"
            >
              免费开始使用 (Get started)
            </a>
          </div>

          {/* Starter */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <span className="bg-[#F97316] text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                STARTER
              </span>
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-slate-900">
                  ¥39
                </span>
                <span className="text-xs text-slate-400 font-semibold ml-1">
                  / 月
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                最适合成长中的独立小项目，解锁对话额度与官方水印。
              </p>
              <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-700">
                <CheckItem>包含 Free 免费版的所有基础功能</CheckItem>
                <CheckItem bold>
                  包含 <b>2 个</b> 协作席位 (Seats)
                </CheckItem>
                <CheckItem>
                  <b>2,000 次/月</b> 核心对话量 (超额仅 ¥70/500次)
                </CheckItem>
                <CheckItem>
                  去除快境官方品牌水印 (Branding removed)
                </CheckItem>
                <CheckItem>允许用户通过对话框直传文件</CheckItem>
                <CheckItem>支持创建多层文件夹管理画布</CheckItem>
                <CheckItem>享有工作日 1V1 专属技术客服优先支持</CheckItem>
              </div>
            </div>
            <a
              href="#demo"
              className="mt-8 w-full py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs text-center smooth-transition shadow-sm block"
            >
              立即订购 (Subscribe now)
            </a>
          </div>

          {/* Pro */}
          <div className="bg-white border-2 border-indigo-400 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-indigo-100 relative ring-2 ring-indigo-400/30">
            <div className="absolute -top-3 right-8">
              <span className="bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                PRO 推荐
              </span>
            </div>
            <div className="space-y-6">
              <span className="bg-indigo-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                PRO
              </span>
              <div className="flex items-baseline">
                <span className="text-3xl font-black text-slate-900">
                  ¥89
                </span>
                <span className="text-xs text-indigo-500 font-semibold ml-1">
                  / 月
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed min-h-[32px]">
                极力推荐！支持打通微信私域生态、绑定独立域名，是爆单获客不二之选。
              </p>
              <div className="border-t border-indigo-100 pt-6 space-y-3.5 text-xs text-slate-700">
                <CheckItem>包含 Starter 起步版的所有核心功能</CheckItem>
                <CheckItem bold className="text-indigo-600">
                  包含 <b>5 个</b> 团队席位 (5 seats)
                </CheckItem>
                <CheckItem bold className="text-indigo-600">
                  <b>10,000 次/月</b> 超大对话流量
                </CheckItem>
                <CheckItem>企业微信与微信客服官方直连对接</CheckItem>
                <CheckItem>
                  支持绑定自定义独立域名 & SSL (Domains)
                </CheckItem>
                <CheckItem>
                  多层深度漏斗转化归因与行为分析 (Analytics)
                </CheckItem>
                <CheckItem>全天候 7x24 小时社群极速响应支持</CheckItem>
              </div>
            </div>
            <a
              href="#demo"
              className="mt-8 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs text-center smooth-transition shadow-md shadow-indigo-200 block"
            >
              立即升级专业版 (Subscribe now)
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 max-w-6xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <h3 className="text-3xl font-black text-slate-950 tracking-tight">
                Enterprise
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                非常适合国内大型品牌商、有极高并发量或需要大规模获取线索、并提供自动化复杂智能客服分配的高要求企业客户。
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl text-xs smooth-transition"
              >
                联系销售获取报价 (Get a quote)
              </a>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="space-y-4">
                <CheckItem>定制超大对话额度与席位上限</CheckItem>
                <CheckItem>正式签署具有法律效力的 SLA 服务协议</CheckItem>
                <CheckItem>24/7 专属架构师团队技术跟进支持</CheckItem>
                <CheckItem>支持企业级 SSO 统一登录与精细权限控制</CheckItem>
              </div>
              <div className="space-y-4">
                <CheckItem>提供专享独占的独立专用 IP 物理地址</CheckItem>
                <CheckItem>国内三级等保安全合规与数据双向强加密</CheckItem>
                <CheckItem>协助完成定制化系统级安全问卷评估</CheckItem>
                <CheckItem>支持专享高级接口（如自建CRM）功能开发</CheckItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckItem({
  children,
  bold,
  className,
}: {
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start ${bold ? "font-semibold" : ""} ${className ?? ""}`}
    >
      <i className="fa-solid fa-circle-check text-slate-900 mr-2.5 mt-0.5" />
      <span>{children}</span>
    </div>
  );
}
