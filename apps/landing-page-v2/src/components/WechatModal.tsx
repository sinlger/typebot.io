import { useState, useCallback } from "react";

export function WechatModal({
  isOpen,
  onClose,
  wechatId,
}: {
  isOpen: boolean;
  onClose: () => void;
  wechatId: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white border border-slate-100 rounded-3xl p-6 max-w-xs w-full mx-4 shadow-2xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 text-2xl">
          <i className="fa-brands fa-weixin" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900">
            成功尝试拉起微信
          </h3>
          <p className="text-[11px] text-slate-400">
            专属顾问微信号已拷贝至您的剪切板
          </p>
        </div>
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-xs font-bold text-[#3B82F6] select-all flex items-center justify-between">
          <span>{wechatId}</span>
          <span className="text-[9px] bg-[#3B82F6] text-white font-extrabold px-1.5 py-0.5 rounded">
            已复制
          </span>
        </div>
        <div className="text-[10px] text-slate-400 text-left bg-emerald-50/40 p-3 rounded-xl border border-emerald-100/50 leading-relaxed">
          💡 <span className="font-bold text-emerald-800">下一步指引：</span>{" "}
          微信客户端已为您在后台唤醒。请进入微信搜索框，
          <strong>长按粘贴微信号</strong>
          即可直接添加专属顾问，免费领取《专属获客增倍方案》！
        </div>
        <button
          onClick={onClose}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-bold text-xs smooth-transition"
        >
          知道了，前往添加
        </button>
      </div>
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<{
    message: string;
    visible: boolean;
  }>({ message: "", visible: false });

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  }, []);

  return { toast, showToast };
}

export function Toast({
  message,
  visible,
}: {
  message: string;
  visible: boolean;
}) {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] px-4 py-2.5 rounded-full shadow-lg font-bold z-50 pointer-events-none transition-all duration-300 flex items-center gap-2 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      <i className="fa-solid fa-circle-check text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}
