import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 text-slate-500 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white text-xs">
              <i className="fa-solid fa-comments" />
            </div>
            <span className="text-xs font-bold text-slate-800">快境 TypeFlow</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            属于快境营销智能触达获客生态圈。通过温馨柔和的 AI 气泡对话替代冰冷表单，为小企业和电商小商户解决广告获客转化难题。
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
            转化功能
          </h4>
          <ul className="space-y-1.5 text-[11px] text-slate-400">
            <li><a href="/#features" className="hover:text-slate-600 transition">未提交无感部分保存</a></li>
            <li><a href="/#features" className="hover:text-slate-600 transition">企业微信一键拉起</a></li>
            <li><a href="/#features" className="hover:text-slate-600 transition">手机号码格式智能核查</a></li>
            <li><a href="/#features" className="hover:text-slate-600 transition">国内 BGP 多线边缘加速</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
            好用工具
          </h4>
          <ul className="space-y-1.5 text-[11px] text-slate-400">
            <li><a href="/#calculator" className="hover:text-slate-600 transition">动态 ROI 收益计算器</a></li>
            <li><a href="/#demo" className="hover:text-slate-600 transition">TypeFlow 沙盒在线仿真</a></li>
            <li><Link to="/templates" className="hover:text-slate-600 transition">模板库</Link></li>
            <li><Link to="/about" className="hover:text-slate-600 transition">关于我们</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
            数据安全
          </h4>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            全站及对话信息均基于国内多可用区、HTTPS/TLS 1.3 级强加密进行安全存储。100%
            确保您私域线索数据的私密安全性。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 gap-4">
        <p>&copy; 2026 快境 TypeFlow 科技. 基于国内中小企业营销转化场景设计研发.</p>
        <div className="flex space-x-4 text-[10px]">
          <a href="#" className="hover:text-slate-600">服务条款</a>
          <a href="#" className="hover:text-slate-600">隐私声明</a>
        </div>
      </div>
    </footer>
  );
}
