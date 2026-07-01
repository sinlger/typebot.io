import { navLinks, contactEmail, homeUrl, icp } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* 品牌 */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-linear-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 2 5 14h6l-1.5 8L19 10h-6l.5-8z" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">擎流</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest -mt-1">
                  QinglBot
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-md">
              新一代轻量低代码自动化连线工作流与互动生成后台。致力于为本土流量主与精细化运营团队提供更极速、更安全的多端智能留资工具。
            </p>
          </div>

          {/* 快捷链接 */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">快捷链接</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-brand-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系 */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-4">技术支持</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-sm hover:text-brand-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a href={homeUrl} className="text-sm hover:text-brand-400 transition-colors">
                  {homeUrl}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部备案 */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 擎流 (QinglBot). 保留所有权利.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-500">
            <a
              href={icp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              {icp.number}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
