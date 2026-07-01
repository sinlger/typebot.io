import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, signinUrl, registerUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Logo />

        {/* 桌面导航 */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 桌面操作按钮 */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={signinUrl}
            className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors px-3 py-2"
          >
            进入控制台
          </a>
          <a
            href={registerUrl}
            className="text-sm font-semibold text-white bg-linear-to-r from-brand-600 to-cyan-600 hover:from-brand-700 hover:to-cyan-700 px-5 py-2.5 rounded-xl shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-0.5"
          >
            免费体验
          </a>
        </div>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-slate-700"
          aria-label="切换菜单"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={signinUrl}
              onClick={() => setOpen(false)}
              className="text-center text-sm font-medium text-slate-700 px-3 py-2.5 rounded-lg border border-slate-200"
            >
              进入控制台
            </a>
            <a
              href={registerUrl}
              onClick={() => setOpen(false)}
              className="text-center text-sm font-semibold text-white bg-linear-to-r from-brand-600 to-cyan-600 px-3 py-2.5 rounded-xl"
            >
              免费注册
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
