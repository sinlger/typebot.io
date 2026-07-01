// 擎流品牌 Logo：闪电图标 + 文字
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${className}`}>
      <span className="w-10 h-10 rounded-xl bg-linear-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
          <path d="M13.5 2 5 14h6l-1.5 8L19 10h-6l.5-8z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold text-slate-900">擎流</span>
        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest -mt-1">
          QinglBot
        </span>
      </span>
    </a>
  );
}
