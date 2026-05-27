import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl text-slate-400 mb-6">
        <i className="fa-solid fa-face-meh" />
      </div>
      <h1 className="text-2xl font-black text-slate-900 mb-2">页面未找到</h1>
      <p className="text-sm text-slate-400 mb-8">您访问的页面不存在或已被移除</p>
      <div className="flex gap-3">
        <button
          onClick={() => window.history.back()}
          className="px-5 py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition"
        >
          返回上一页
        </button>
        <Link
          to="/"
          className="px-5 py-2.5 text-xs font-bold text-white bg-[#3B82F6] rounded-xl hover:bg-[#2563EB] transition"
        >
          回到首页
        </Link>
      </div>
    </div>
  );
}
