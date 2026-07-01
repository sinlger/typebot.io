import { registerUrl } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-r from-brand-700 to-teal-500 px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-brand-500/20">
          {/* 点阵装饰 */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              开启擎流，见证澎湃增长的高转化流量
            </h2>
            <p className="mt-5 text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
              仅需几分钟简单拖拽，即可让您的网站、推广渠道拥有一名全天候在线、懂逻辑的高能转化助手。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={registerUrl}
                className="text-base font-semibold text-brand-700 bg-white hover:bg-brand-50 px-7 py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
              >
                免费创建我的第一个流
              </a>
              <a
                href="#pricing"
                className="text-base font-semibold text-white border border-white/60 hover:bg-white/10 px-7 py-3.5 rounded-xl transition-all"
              >
                资费方案
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
