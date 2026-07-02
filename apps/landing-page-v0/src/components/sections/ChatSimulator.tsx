import { Lightbulb } from "lucide-react";

export function ChatSimulator() {
  return (
    <section id="chat-simulator" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧介绍 */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              实时体验区
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              直接在这里体验 “擎流”的气泡对话魅力
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              这是由擎流画布实时转换出的移动端智能界面。请在右侧直接点击对应的选择项按钮，体验流转和留资的惊艳顺畅。
            </p>
            <div className="mt-6 flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>体验提示：</strong>您可以反复点击选项。完全在前端实时响应，让您的目标客户像在微信里聊天一样轻松给出答案。
              </p>
            </div>
          </div>

          {/* 右侧对话流占位区：此处将内嵌真实的擎流对话流 */}
          <div className="lg:col-span-7 flex justify-center">
            <iframe
              title="Typebot"
              src="https://viewer.qinglbot.com/faq-bax18sd"
              className="w-full max-w-sm flex items-center justify-center rounded-[1rem] border-2 border-dashed border-slate-200 bg-slate-50/50 min-h-120"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
