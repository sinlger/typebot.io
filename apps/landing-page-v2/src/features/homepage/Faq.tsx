import { useState } from "react";

const faqItems = [
  {
    question: "有哪些定价方案？免费套餐包含哪些功能？",
    answer: `<p>我们提供三种主流的基础定价方案：永久免费版 (Free)、标准起步版 (¥280/月) 和专业增长版 (¥640/月)。此外还有支持深度定制的 Enterprise 套餐。</p>
<p><b>免费版支持：</b>无限制创建对话流画布、200次/月免费对话额度、集成第三方系统、标准 Webhook 回调、允许插入和修改自定义 Javascript/CSS 脚本，以及访问国内中文问答库支持。</p>`,
  },
  {
    question: "将Typebot与我现有的系统和平台整合起来有多容易？",
    answer: `<p>非常容易。快境 TypeFlow 完全对齐标准原生的 Webhook 和 API，支持通过零代码连接工具（如 Zapier, Make 等）在几分钟内与您的自建后端、CRM 或表格应用对接。</p>
<p>我们同时深度集成国内本土私域生态，提供<b>企业微信、官方微信客服、小程序跳转的一键呼出</b>，只需复制一段超轻量级的 Javascript SDK 到您的任意网页即可渲染上线。</p>`,
  },
  {
    question: "Typebot 提供哪些 AI 和机器学习功能？",
    answer: `<p>我们内置了主流的大语言模型 (LLM) 和 AI 开发积木。支持一键集成 <b>Gemini、OpenAI 节点</b>，允许将多轮对话托管给 AI 模型。</p>
<p>AI 模块允许您自由编写 System Prompt 设定角色、上传本地文档（知识库 PDF/TXT），实现自动分类用户意图并提取关键变量（如姓名、意向、手机号），彻底免除枯燥复杂的传统规则配置。</p>`,
  },
  {
    question: "如果我遇到问题或需要帮助，有哪些支持和资源可用？",
    answer: `<p>对于不同档位的用户，我们提供全方位的中文本地支持：</p>
<p><b>免费版/新用户：</b>提供全面的中文详细配置文档、使用手册以及在线问答技术社区；</p>
<p><b>付费版/高潜用户：</b>享有工作日优先邮件支持，而 <b>PRO 套餐</b>更提供专属社群 7x24 快速通道支持；Enterprise 级别直接配备大客户专属架构师。有任何关于代码集成、私域唤起、广告转化的问题均可获得即时解答。</p>`,
  },
  {
    question: "Typebot 的安全性如何？你们是如何处理数据隐私的？",
    answer: `<p>数据安全与合规是我们的基石。快境 TypeFlow 全站使用 HTTPS 加密，对话数据存储于国内高安全、多可用区的数据云物理服务器，并进行高级 TLS 1.3 双向动态传输加密保护。</p>
<p>我们完全符合海外严格的 <b>GDPR 用户隐私保护条例</b> 规范，同时也针对国内中小企业客户定制了最省心、合规的数据脱敏安全审计，确保您收集到的微信号 and 手机号绝不泄露。</p>`,
  },
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            常见问题
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item bg-white border border-slate-200/60 rounded-xl transition smooth-transition ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left px-5 py-4 flex items-center justify-between text-slate-800 font-bold text-xs sm:text-sm select-none hover:text-[#3B82F6] transition"
              >
                <span>{item.question}</span>
                <span className="faq-icon transition duration-300 ml-4 shrink-0 text-slate-400">
                  <i className="fa-solid fa-chevron-down" />
                </span>
              </button>
              <div className="faq-answer px-5 border-t border-slate-50 text-[11px] sm:text-xs text-slate-500 leading-relaxed bg-slate-50/30">
                <div
                  className="py-4 space-y-2"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
