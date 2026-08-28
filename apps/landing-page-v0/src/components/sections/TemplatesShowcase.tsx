import { ArrowRight } from "lucide-react";
import { registerUrl } from "@/lib/site";

type IndustryTemplate = {
  emoji: string;
  title: string;
  desc: string;
  points: string[];
  tag: string;
  accent: string;
};

const industryTemplates: IndustryTemplate[] = [
  {
    emoji: "🛒",
    title: "电商客服",
    desc: "自动处理售前咨询、物流查询与退换货引导，复杂问题一键转人工，不再错过任何一笔潜在订单。",
    points: ["商品咨询自动答", "物流进度查询", "退换货政策引导"],
    tag: "电商 · 独立站",
    accent: "bg-brand-100 text-brand-700",
  },
  {
    emoji: "🎓",
    title: "教育机构客服",
    desc: "承接课程咨询、报名意向登记与开课时间查询，让每一个潜在学员都被及时跟进。",
    points: ["课程方向介绍", "报名信息登记", "开课排期查询"],
    tag: "教育 · 培训",
    accent: "bg-indigo-100 text-indigo-700",
  },
  {
    emoji: "🏪",
    title: "本地生活服务客服",
    desc: "为门店配置智能前台：服务介绍、在线登记预约、到店指引，顾客咨询不落空。",
    points: ["服务内容介绍", "在线预约登记", "地址与营业时间"],
    tag: "本地 · 到店服务",
    accent: "bg-amber-100 text-amber-700",
  },
];

export function TemplatesShowcase() {
  return (
    <section id="templates" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
            行业模板 · 开箱即用
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            选一个模板，几分钟搭建你的网站客服
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            注册后可直接从模板创建机器人，流程已搭好，改改文案就能上线。以下为网站客服场景的行业模板，更多模板持续上新。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryTemplates.map((t) => (
            <div
              key={t.title}
              className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all hover:-translate-y-1 p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-5xl" role="img" aria-label={t.title}>
                  {t.emoji}
                </span>
                <span
                  className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${t.accent}`}
                >
                  {t.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                {t.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {t.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={registerUrl}
            className="inline-flex items-center gap-2 text-base font-semibold text-white bg-linear-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 px-8 py-3.5 rounded-sm shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            免费开始，从模板创建
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
