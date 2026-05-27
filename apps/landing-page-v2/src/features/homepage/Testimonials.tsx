const testimonials = [
  {
    quote:
      "以前抖音和视频号引流，在落地页放静态表单，一天进几百人只有几个留电话的，还经常有空号。换上快境 TypeFlow 极简对话流后，<b>第一步输入姓名就自动部分提交</b>，漏斗损耗降低超 60%，获客微信加粉率直接狂飙！",
    name: "陈经理",
    initials: "陈",
    role: "某潮牌男装跨境/电商负责人",
  },
  {
    quote:
      "作为独立小产品开发者，平时夜间有大量用户咨询，人工客服根本忙不过来。使用了快境 TypeFlow，<b>内置 Gemini AI 知识库</b>能 24 小时精准作答，不仅转化好几个大定单，一键复制微信拉起的交互也帮我们省去了大量截图教育流程。",
    name: "阿杰",
    initials: "阿",
    role: "SaaS 独立开发者 / 个人创业者",
  },
  {
    quote:
      "我们做本地生活同城配送的。客户以前最嫌烦琐填表。TypeFlow 马卡龙浅色交互太舒服了，客户跟朋友聊天一样就留下了地址和手机。数据还能<b>秒级推送到我们飞书表格分配销售</b>，完美对齐我们的整个私域跟进流程。",
    name: "林雨轩",
    initials: "林",
    role: "本地生鲜连锁私域运营总监",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-white relative border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            USER SUCCESS STORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            听听他们怎么说
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            加入
            2,000+ 已通过 TypeFlow 对话流将加粉和询盘率拉爆的国内中小团队。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glow-card p-6 rounded-2xl smooth-transition space-y-4 flex flex-col justify-between"
            >
              <p
                className="text-xs text-slate-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <div className="flex items-center space-x-3 pt-2 border-t border-slate-50">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-extrabold text-[#3B82F6]">
                  {t.initials}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">
                    {t.name}
                  </h5>
                  <span className="text-[10px] text-slate-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
