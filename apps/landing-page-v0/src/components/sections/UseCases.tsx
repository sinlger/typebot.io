import {
  Megaphone,
  Headphones,
  ClipboardList,
  ShoppingCart,
  GraduationCap,
  CalendarCheck,
} from "lucide-react";

type UseCase = {
  icon: typeof Megaphone;
  title: string;
  desc: string;
  tag: string;
  accent: string;
};

const useCases: UseCase[] = [
  {
    icon: Megaphone,
    title: "线索留资获客",
    desc: "在落地页、公众号菜单植入智能问答流，逐问逐答收集客户行业、规模、预算，比传统表单留资率提升 3 倍。",
    tag: "市场推广",
    accent: "bg-brand-100 text-brand-700",
  },
  {
    icon: Headphones,
    title: "7×24 智能客服",
    desc: "用多分支画布搭建常见问题应答树，自动处理 80% 重复咨询，复杂问题无缝转接人工，夜间不再漏回。",
    tag: "客户服务",
    accent: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: ClipboardList,
    title: "问卷与 NPS 调研",
    desc: "把枯燥问卷变成对话，按作答动态跳转下一题，完成率较静态表单翻倍，数据实时回传 CRM。",
    tag: "用户洞察",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ShoppingCart,
    title: "电商导购与追单",
    desc: "根据用户偏好推荐商品、解答规格疑问，下单后自动推送物流提醒，弃单客户一键唤回。",
    tag: "电商运营",
    accent: "bg-teal-100 text-teal-700",
  },
  {
    icon: GraduationCap,
    title: "在线教育与选课",
    desc: "新生通过问答流完成能力测评、匹配课程方案，自动生成学习路径并引导报名付费。",
    tag: "教育培训",
    accent: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: CalendarCheck,
    title: "预约挂号与排期",
    desc: "诊所、美容、培训机构用画布引导客户选项目、选时段、确认信息，自动写入预约系统并发送提醒。",
    tag: "预约服务",
    accent: "bg-amber-100 text-amber-700",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest">落地场景</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">六大典型使用场景</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            从获客留资到客服排期，擎流画布可灵活拼装出适配各行各业的智能交互流。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group bg-white rounded-3xl p-7 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-2xl ${uc.accent} flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <uc.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {uc.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{uc.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
