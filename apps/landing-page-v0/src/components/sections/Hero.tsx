import { ArrowRight } from "lucide-react";
import { registerUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-linear-to-b from-brand-50/40 via-white to-white">
      {/* 背景光晕 */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl animate-radial-pulse" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-radial-pulse" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 徽章 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 shadow-sm">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-brand-400 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-600" />
          </span>
          <span className="text-xs font-medium text-brand-700">
            国内高性能、超流畅可视化流编排系统
          </span>
        </div>

        {/* 标题 */}
        <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          用积木般简单的拖拽
          <br />
          <span className="gradient-text">重塑您与客户的智能交互</span>
        </h1>

        {/* 副标题 */}
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          <strong className="font-semibold text-slate-800">
            “擎流” (QinglBot)
          </strong>{" "}
          是一款面向精细化运营打造的低代码工作流画布与对话系统。无需代码，拖拉连线即可瞬间发布表单或智能助手。
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={registerUrl}
            className="group inline-flex items-center gap-2 text-base font-semibold text-white bg-linear-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 px-7 py-3.5 rounded-sm shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            免费开始创建
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#editor-preview"
            className="inline-flex items-center gap-2 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-brand-300 hover:text-brand-600 px-7 py-3.5 rounded-sm shadow-sm transition-all"
          >
            预览工作流编辑器
          </a>
        </div>
      </div>
    </section>
  );
}
