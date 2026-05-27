import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            关于我们
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            好的对话，建立更好的关系
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
            快境 TypeFlow
            是一支专注于国内中小企业数字化获客的技术团队。我们基于
            Typebot 开源项目的核心理念，深度适配中国本土营销场景，打造了
            AI 对话式留资与私域获客 SaaS 系统。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-[#f0f6ff] text-[#3B82F6] rounded-xl flex items-center justify-center mx-auto text-xl">
              <i className="fa-solid fa-bolt" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">极简部署</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              零门槛三步上线，无需任何技术背景即可创建高转化率的对话式留资流程。
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center mx-auto text-xl">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">数据安全</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              全站 HTTPS/TLS 1.3 加密，数据存储于国内多可用区安全服务器，100%
              保障隐私。
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mx-auto text-xl">
              <i className="fa-solid fa-comments" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">国内深度适配</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              原生对接企业微信、微信客服、小程序，完美融入国内私域营销生态。
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#f0f6ff] to-indigo-50 rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            加入 2,000+ 国内中小企业的获客增长之路
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            从今天开始，用 AI 对话替代冰冷表单，让每一次广告点击都不被浪费。
          </p>
          <a
            href="/#demo"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold rounded-xl smooth-transition shadow-md shadow-blue-500/10 text-sm"
          >
            免费开始体验
            <i className="fa-solid fa-arrow-right ml-1.5 text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}
