import { useState } from "react";
import { Check, X } from "lucide-react";
import { pricingPlans, type BillingCycle } from "@/lib/site";
import { PricingComparison } from "./PricingComparison";

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="py-20 md:py-28 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold text-brand-600 uppercase tracking-widest">高性价比服务</h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">透明且极具弹性的资费套餐</p>

        </div>

        {/* 月/年付切换 */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="relative inline-flex items-center bg-slate-100 rounded-sm p-1">
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-white shadow-sm transition-transform duration-300 ease-out ${cycle === "yearly" ? "translate-x-full" : "translate-x-0"
                }`}
            />
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={`relative z-10 px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${cycle === "monthly"
                ? "text-slate-800"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              按月付
            </button>
            <button
              type="button"
              onClick={() => setCycle("yearly")}
              className={`relative z-10 px-5 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${cycle === "yearly"
                ? "text-slate-800"
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
              按年付
            </button>
          </div>
          <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
            省 20%
          </span>
        </div>

        {/* 套餐卡片 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const price =
              cycle === "monthly" ? plan.monthly : plan.yearly;
            const isFree = plan.monthly === 0;
            const priceDisplay =
              plan.monthly === null
                ? plan.priceLabel
                : isFree
                  ? plan.priceLabel
                  : `￥${price}`;

            // 高亮卡（Pro）
            if (plan.highlight) {
              return (
                <div
                  key={plan.name}
                  className="relative flex flex-col h-full rounded-3xl bg-linear-to-b from-brand-600 to-teal-700 border-2 border-brand-300 p-8 shadow-2xl shadow-brand-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-500/40"
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-700 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{priceDisplay}</span>
                    <span className="text-sm text-brand-100">{plan.unit}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                        <Check className="w-4 h-4 text-brand-100 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.cta.href}
                    className="mt-8 block text-center text-sm font-semibold text-brand-700 bg-white hover:bg-brand-50 px-5 py-3 rounded-sm shadow-sm hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    {plan.cta.label}
                  </a>
                </div>
              );
            }

            // 深色卡（私有部署）
            if (plan.dark) {
              return (
                <div
                  key={plan.name}
                  className="flex flex-col h-full rounded-3xl bg-dark-950 border border-slate-800 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl"
                >
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-white">{plan.priceLabel}</span>
                    <span className="block text-sm text-slate-400 mt-1">{plan.unit}</span>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.cta.href}
                    className="mt-8 block text-center text-sm font-semibold text-white border border-slate-700 hover:bg-slate-800 px-5 py-3 rounded-sm hover:scale-[1.03] active:scale-95 transition-all duration-300"
                  >
                    {plan.cta.label}
                  </a>
                </div>
              );
            }

            // 普通卡
            return (
              <div
                key={plan.name}
                className="flex flex-col h-full rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">{priceDisplay}</span>
                  <span className="text-sm text-slate-500">{plan.unit}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.strikethrough?.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-slate-400 line-through"
                    >
                      <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.cta.href}
                  className="mt-8 block text-center text-sm font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 px-5 py-3 rounded-sm border border-brand-200/60 hover:scale-[1.03] active:scale-95 transition-all duration-300"
                >
                  {plan.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        {/* 功能对比表 */}
        <PricingComparison />
      </div>
    </section>
  );
}
