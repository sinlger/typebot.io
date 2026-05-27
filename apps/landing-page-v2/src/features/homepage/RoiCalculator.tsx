import { useState } from "react";

const TRAD_RATE = 0.04;
const FLOW_RATE = 0.24;

function formatNum(n: number) {
  return n.toLocaleString();
}

export default function RoiCalculator() {
  const [uv, setUv] = useState(10000);
  const [price, setPrice] = useState(500);

  const tradLeads = Math.round(uv * TRAD_RATE);
  const flowLeads = Math.round(uv * FLOW_RATE);
  const tradRevenue = tradLeads * price;
  const flowRevenue = flowLeads * price;
  const netAdded = flowRevenue - tradRevenue;

  return (
    <section
      id="calculator"
      className="py-16 md:py-20 bg-white relative border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[#3B82F6] text-xs font-bold tracking-widest uppercase">
              算算性价比
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              拒绝虚高开支：
              <br />
              算一算能挽回多少点击损耗？
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              国内如腾讯、巨量信息流点击一次可能高达几元甚至几十元。普通的静态网页表单因为加载慢或设计冷冰冰，流失率往往大于
              90%。而 TypeFlow 让每一次点击都极富交互生命力。
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 space-y-1 shadow-sm">
              <p>
                 <span className="font-bold text-slate-700">普通静态表单：</span>
                转化率往往徘徊在{" "}
                <span className="text-rose-500 font-bold">3% - 5%</span> 左右
              </p>
              <p>
                 <span className="font-bold text-[#3B82F6]">
                  快境 TypeFlow：
                </span>
                对话式无感流存率最高可至{" "}
                <span className="text-[#3B82F6] font-bold">20% - 30%</span>
              </p>
            </div>
          </div>

          {/* Right calculator */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-100/60">
            <div className="space-y-6">
              {/* UV slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600">
                    {" "}
                    估算每月广告进站点击量 (UV)
                  </span>
                  <span className="text-[#3B82F6] font-mono text-sm font-extrabold">
                    {formatNum(uv)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={uv}
                  onChange={(e) => setUv(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                />
              </div>

              {/* Price slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-600">
                    {" "}
                    您的平均产品客单价 (元/RMB)
                  </span>
                  <span className="text-[#3B82F6] font-mono text-sm font-extrabold">
                    ¥ {formatNum(price)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#3B82F6]"
                />
              </div>

              {/* Comparison cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                {/* Traditional */}
                <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/50">
                  <span className="text-[10px] text-slate-400 block mb-1 font-bold">
                    普通落地页表单 (4% 留存)
                  </span>
                  <div className="text-xs font-bold text-slate-500 font-mono space-y-1">
                    <p>
                      获客留资数：
                      <span className="text-slate-700">
                        {formatNum(tradLeads)}
                      </span>{" "}
                      个
                    </p>
                    <p>
                      预计月度营收：
                      <span className="text-rose-500">
                        ¥{formatNum(tradRevenue)}
                      </span>
                    </p>
                  </div>
                </div>

                {/* TypeFlow */}
                <div className="bg-[#f0f6ff]/30 p-4 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-[#2563EB] font-bold">
                      TypeFlow 对话式 (24% 留存)
                    </span>
                    <span className="text-[8px] bg-[#3B82F6] text-white font-extrabold px-1 rounded">
                      推荐
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-600 font-mono space-y-1">
                    <p>
                      获客留资数：
                      <span className="text-[#3B82F6]">
                        {formatNum(flowLeads)}
                      </span>{" "}
                      个
                    </p>
                    <p>
                      预计月度营收：
                      <span className="text-[#3B82F6]">
                        ¥{formatNum(flowRevenue)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Profit bubble */}
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/80 flex items-center justify-between text-center sm:text-left flex-col sm:flex-row gap-3">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold">
                     预计月度额外纯收益增长
                  </span>
                  <span className="text-xl font-black text-emerald-600 font-mono">
                    ¥ {formatNum(netAdded)}
                  </span>
                </div>
                <a
                  href="#demo"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-xs px-4 py-2.5 rounded-xl smooth-transition"
                >
                  获取免费模板
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
