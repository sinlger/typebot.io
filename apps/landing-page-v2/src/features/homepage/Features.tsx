const features = [
  {
    icon: "fa-cubes",
    iconBg: "bg-[#f0f6ff]",
    iconColor: "text-[#3B82F6]",
    title: "拼图式积木库 (Rich Blocks)",
    description:
      "提供文本引导、图片选项、国内手机、微信号、省市区级联选择、文件上传等20余种组件。零门槛通过连线拼接即可上线。",
  },
  {
    icon: "fa-floppy-disk",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    title: "流失挽回 (Partial Submissions)",
    description:
      "国内独创！客户在第一步只输入了名字，即使中途关闭落地页，输入的数据也已秒级存盘。您可以直接进行后续跟进。",
  },
  {
    icon: "fa-brands fa-weixin",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "一键复制与企微拉起",
    description:
      '内置智能复制逻辑，完美实现"一键拷贝顾问微信号"并同步拉起微信客户端，极大缩短加粉路径。',
  },
  {
    icon: "fa-share-nodes",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "多渠道弹窗与内嵌",
    description:
      "一键生成代码。支持以气泡、内嵌组件、全屏弹窗形式放入您的网站，或直接与微信小程序、公众号菜单绑定。",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-white relative border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            全面解决国内获客流失痛点
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            告别冰冷生硬的传统表单
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            国内流量成本高，客户点开就走？这里有对齐
            Typebot 核心的数据输入区块 and
            极其丰富的本土私域闭环积木。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glow-card p-6 rounded-2xl smooth-transition"
            >
              <div
                className={`w-10 h-10 ${f.iconBg} ${f.iconColor} rounded-xl flex items-center justify-center text-lg mb-4`}
              >
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
