import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { comparisonGroups, pricingPlans } from "@/lib/site";

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="w-4 h-4 text-brand-600 mx-auto" />;
  if (value === false) return <Minus className="w-4 h-4 text-slate-300 mx-auto" />;
  return <span className="text-sm text-slate-700">{value}</span>;
}

export function PricingComparison() {
  return (
    <div className="mt-20">
      <h3 className="text-center text-2xl font-bold text-slate-900">功能对比一览</h3>
      <p className="mt-3 text-center text-sm text-slate-600">逐项对比四档套餐，按需选择最契合的方案。</p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse min-w-180">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left text-sm font-semibold text-slate-500 py-4 pr-4 w-1/3">功能</th>
              {pricingPlans.map((plan) => (
                <th key={plan.name} className="text-center text-sm font-bold text-slate-900 py-4 px-3">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonGroups.map((group) => (
              <Fragment key={group.title}>
                <tr className="bg-slate-50/80">
                  <td
                    colSpan={pricingPlans.length + 1}
                    className="text-xs font-bold text-brand-700 uppercase tracking-wider py-2.5 px-4"
                  >
                    {group.title}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100">
                    <td className="text-sm text-slate-600 py-3.5 pr-4">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="text-center py-3.5 px-3">
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
