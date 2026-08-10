// 擎流品牌 Logo：闪电图标 + 文字
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/favicon.svg"
        alt=""
        className="w-14 h-10 object-contain shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold text-slate-900">擎流</span>
        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest -mt-1">
          QinglBot
        </span>
      </span>
    </a>
  );
}
