import { Boxes, Share2, Webhook, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "积木式流程画布",
    desc: "支持文字、多选按钮、数值、输入表单、多跳转逻辑，任意搭配即可在几分钟内拼凑出专属业务流。",
    iconWrap: "bg-brand-100 text-brand-700",
  },
  {
    icon: Share2,
    title: "一键分发与多端内嵌",
    desc: "可作为全屏链接、弹窗或右下角小气泡无缝植入您的企业网站、小程序中，完美实现无阻碍获客。",
    iconWrap: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: Webhook,
    title: "开放接口与数据流转",
    desc: "支持丰富的 Webhook 及自定义 API 节点，自动同步新线索到企业微信、飞书、钉钉群，或导入私有 CRM 中。",
    iconWrap: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: BarChart3,
    title: "全链路漏斗分析看板",
    desc: "记录客户在每一个问题节点的流失率。用直观的图形化漏斗，告诉您哪个节点还需调优。",
    iconWrap: "bg-teal-100 text-teal-700",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest">为什么选择擎流</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">强大的四大核心优势</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            颠覆传统的死板填表模式，用人性的连线画布与逐问逐答，提升3倍以上客户表单留资率。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-slate-50 rounded-3xl p-8 border border-transparent hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${f.iconWrap} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}
              >
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
