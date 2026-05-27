import { Link } from "@tanstack/react-router";
import { appUrl } from "@/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-100 smooth-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2.5">
          <div className="w-9 h-9 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/10">
            <i className="fa-solid fa-comments text-white text-base" />
          </div>
          <div>
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              快境 <span className="text-[#3B82F6]">TypeFlow</span>
            </span>
            <span className="block text-[8px] text-slate-400 uppercase tracking-widest font-bold leading-none mt-0.5">
              轻量获客·私域转化
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-500">
          <a href="/#features" className="hover:text-[#3B82F6] transition">核心功能</a>
          <a href="/#how-it-works" className="hover:text-[#3B82F6] transition">如何运作</a>
          <a href="/#get-started-flow" className="hover:text-[#3B82F6] transition">使用流程</a>
          <a href="/#calculator" className="hover:text-[#3B82F6] transition">收益测算</a>
          <a href="/#demo" className="hover:text-[#3B82F6] transition">真机模拟</a>
          <a href="/#pricing" className="hover:text-[#3B82F6] transition">极简定价</a>
          <a href="/#faq" className="hover:text-[#3B82F6] transition">常见问题</a>
          <Link to="/templates" className="hover:text-[#3B82F6] transition">模板</Link>
          <Link to="/about" className="hover:text-[#3B82F6] transition">关于</Link>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center space-x-3">
          <a
            href={`${appUrl}/signin`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition shadow-sm shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20"
          >
            前往工作台
            <i className="fa-solid fa-chevron-right ml-1 text-[9px]" />
          </a>
        </div>
      </div>
    </header>
  );
}
