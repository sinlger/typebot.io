export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-slate-50/20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
            为降本增效而生
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            为什么 TypeFlow 转化率明显高于传统表单？
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            对齐国内中小企业的真实营销场景，每一个细节均为了帮您挽回流失、省下广告开支。
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative bg-white border-2 border-dashed border-slate-200/80 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[10px] text-slate-400 font-mono">
                  Real-time Lead Capture Analytics
                </span>
                <span className="text-[9px] bg-slate-100 text-slate-500 px-2 rounded">
                  1000 x 600
                </span>
              </div>
              <div className="my-auto text-center space-y-3">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center mx-auto text-xl shadow-sm">
                  <i className="fa-solid fa-hourglass-half" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">
                  【图片留空 2】流失步骤分析与"未完成留资"捕获数据表
                </h4>
                <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                  这里适合放置：SaaS 后台的数据统计分析图。可以展示每个提问节点的流失率柱状图，以及正在输入中、未点最后提交就关闭网页的用户的微信号、电话列表。
                </p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-[10px] text-slate-400">
                ⭐ 推荐寻找：中文版的数据漏斗图表、线索收集列表界面。
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              不再因为中途跳出，错失任何意向线索
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              TypeFlow 继承了 TypeBot 对话式表单的核心优势：通过分步、自然的对话引导，大幅降低用户填写压力，从根源上减少中途跳出。区别于传统表单
              "必须提交才算成功"
              的逻辑，TypeBot 的每一步交互都在降低用户心理负担，而 TypeFlow
              在此基础上，进一步适配国内营销场景，让对话式流程的高转化优势真正落地。
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li>
                <i className="fa-solid fa-check text-indigo-500 mr-2" /> 实时无感保存已填字段
              </li>
              <li>
                <i className="fa-solid fa-check text-indigo-500 mr-2" />{" "}
                精准诊断并找出让客户感到反感的提问步骤
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2 (reversed layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <div className="w-8 h-8 bg-[#f0f6ff] text-[#2563EB] rounded-xl flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              直连国产/海外大模型，用 AI Agent 替代高昂的客服人力
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              TypeFlow 基于 TypeBot 原生的大模型集成能力，做了更贴合国内用户的深度优化。TypeBot
              支持 OpenAI、Anthropic 等海外大模型，而 TypeFlow
              在此之上，新增了国产 AI 模型直连、微信生态适配、中文知识库上传等本土化功能，让企业无需复杂配置，就能用
              AI Agent 替代重复客服工作，降低中小商家的人力成本。
            </p>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li>
                <i className="fa-solid fa-check text-[#3B82F6] mr-2" />{" "}
                内置 AI 深度学习知识库与 Prompt 配置
              </li>
              <li>
                <i className="fa-solid fa-check text-[#3B82F6] mr-2" />{" "}
                实时自动判别无效白嫖党，专为精准线索打标
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative bg-white border-2 border-dashed border-slate-200/80 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-[10px] text-slate-400 font-mono">
                  AI Knowledge Base Settings Panel
                </span>
                <span className="text-[9px] bg-slate-100 text-slate-500 px-2 rounded">
                  1000 x 600
                </span>
              </div>
              <div className="my-auto text-center space-y-3">
                <div className="w-12 h-12 bg-[#f0f6ff] text-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto text-xl shadow-sm">
                  <i className="fa-solid fa-robot" />
                </div>
                <h4 className="text-xs font-bold text-slate-800">
                  【图片留空 3】AI 智能回复话术设置与中文文档上传后台
                </h4>
                <p className="text-[10px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                  这里适合放置：展示如何为 AI
                  机器人喂养企业自己的 Word、PDF、或 FAQ
                  常见问题，并设置"意图分类"和变量写入的侧边栏截图。
                </p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-[10px] text-slate-400">
                ⭐ 推荐寻找：中文版带有"上传文档/知识库配置"的简洁大模型对话节点后台。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
