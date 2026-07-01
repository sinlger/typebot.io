const faqs = [
  {
    q: "擎流的服务器环境部署在国内哪里？网络质量如何？",
    a: "擎流生产环境部署于国内骨干数据中心，全程接入高防多线 BGP CDN，国内访问响应普遍低于 100ms，保障高峰期会话依旧顺滑稳定。",
  },
  {
    q: "专属独立部署支持如何交付？",
    a: "您只需准备一台已注册域名的 Linux 主机，我们的工程师会通过自动化脚本将前端、后端与分布式存储一键迁移部署到位，通常 15 分钟内即可交付上线。",
  },
  {
    q: "如何把擎流画布设计出的流嵌入到我自己的微信公众号中？",
    a: "发布后擎流会生成一条干净的 H5 链接，可直接放置在微信公众号自定义菜单、关键词自动回复，或小程序 webview 中，无需额外开发即可落地获客。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest">答您所解</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            关于 “擎流” 的常见疑问
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-[#fafbfd] rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-md transition-all px-6 py-1 open:border-brand-300 open:shadow-md"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none py-4 text-sm font-semibold text-slate-800">
                {faq.q}
                <svg
                  className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180 shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
