import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbulb } from "lucide-react";

type Option = {
  key: string;
  text: string;
  variant?: "brand" | "muted";
};

type Step = {
  reply: string; // 支持 <b> 标签
  options: Option[];
};

const INITIAL_MESSAGE =
  "您好！我是擎流智能助理。很高兴您光临我们的网站！今天主要是想向您了解：您目前部署擎流的核心诉求是什么？";

const INITIAL_OPTIONS: Option[] = [
  { key: "A", text: "A. 独立私有化部署，确保数据安全" },
  { key: "B", text: "B. SaaS 云端订阅，省事省力开箱即用" },
];

const STEPS: Record<string, Step> = {
  A: {
    reply:
      "太棒了！数据安全是企业的大事。擎流的<b>“专属独立部署方案”</b>不仅支持一键迁移到您的自建云账户中，更支持定制流组件。请问您目前公司的运维人员是否熟悉 Docker 容器或基础 Linux 运维？",
    options: [
      { key: "A_YES", text: "有专业运维人员支持" },
      { key: "A_NO", text: "无专职运维，希望由擎流全托管部署" },
    ],
  },
  B: {
    reply:
      "没问题！<b>SaaS 云端订阅（Pro 团队协作版）</b>是我们的性价比首选。支持5个席位团队成员，并去除所有官方水印，随时支持高并发扩容。您期望最快什么时候能将第一条连线流推上线试运行？",
    options: [
      { key: "B_FAST", text: "今天就上，测试实时获客效率" },
      { key: "RESET", text: "🔄 重新开始体验", variant: "muted" },
    ],
  },
  A_YES: {
    reply:
      "非常专业！您可以直接选择“专属私有化部署”方案，我们的支持群会直接为您提供全套一键部署脚本，通常15分钟内即可顺利上线。您可以点击底部的链接提交试用申请。",
    options: [{ key: "RESET", text: "🔄 重新开始体验", variant: "muted" }],
  },
  A_NO: {
    reply:
      "没关系！擎流提供完善的“保姆式一键部署托管”。只需将您的服务器SSH授权给我们，工程师会代劳搞定全套环境。交付即用。您可以点击下方按钮重新体验对话。",
    options: [{ key: "RESET", text: "🔄 重新开始体验", variant: "muted" }],
  },
  B_FAST: {
    reply:
      "雷厉风行！擎流提供注册即用的测试权限。建议您立即点击本门户页面的任一<b>“免费体验”</b>按钮，登录控制台创建新画布，5分钟内就能将首个交互流挂载完毕！",
    options: [{ key: "RESET", text: "🔄 重新开始体验", variant: "muted" }],
  },
};

type ChatMessage = {
  from: "bot" | "user";
  html?: string; // bot 回复带 <b>
  text?: string; // 用户纯文本
};

export function ChatSimulator() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "bot", html: INITIAL_MESSAGE },
  ]);
  const [options, setOptions] = useState<Option[]>(INITIAL_OPTIONS);
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自动滚到底
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  const handleSelect = useCallback((opt: Option) => {
    if (opt.key === "RESET") {
      setMessages([{ from: "bot", html: INITIAL_MESSAGE }]);
      setOptions(INITIAL_OPTIONS);
      return;
    }

    // 添加用户气泡
    setMessages((prev) => [...prev, { from: "user", text: opt.text }]);
    setThinking(true);
    setOptions([]);

    // 模拟延迟后回复
    window.setTimeout(() => {
      const step = STEPS[opt.key];
      if (step) {
        setMessages((prev) => [...prev, { from: "bot", html: step.reply }]);
        setOptions(step.options);
      }
      setThinking(false);
    }, 1000);
  }, []);

  return (
    <section id="chat-simulator" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧介绍 */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              实时体验区
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              直接在这里体验 “擎流”的气泡对话魅力
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              这是由擎流画布实时转换出的移动端智能界面。请在右侧直接点击对应的选择项按钮，体验流转和留资的惊艳顺畅。
            </p>
            <div className="mt-6 flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>体验提示：</strong>您可以反复点击选项。完全在前端实时响应，让您的目标客户像在微信里聊天一样轻松给出答案。
              </p>
            </div>
          </div>

          {/* 右侧手机模拟器 */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-sm rounded-[2.5rem] border-4 border-slate-200 bg-white shadow-2xl overflow-hidden">
              {/* 状态栏 */}
              <div className="flex items-center justify-between px-6 py-2 bg-white text-[10px] text-slate-500">
                <span>09:41</span>
                <span className="absolute left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-2xl" />
                <span className="flex items-center gap-1">
                  <span>信号</span>
                  <span>电池</span>
                </span>
              </div>

              {/* 聊天区 */}
              <div
                ref={scrollRef}
                className="bg-slate-50 px-4 py-5 space-y-3 overflow-y-auto"
                style={{ height: "420px" }}
              >
                {messages.map((msg, i) =>
                  msg.from === "bot" ? (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand-500/20 shrink-0">
                        擎
                      </div>
                      <div
                        className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-[80%] text-xs text-slate-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: msg.html ?? "" }}
                      />
                    </div>
                  ) : (
                    <div key={i} className="flex items-start gap-2.5 justify-end">
                      <div className="bg-brand-600 text-white px-4 py-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] text-xs leading-relaxed">
                        {msg.text}
                      </div>
                    </div>
                  )
                )}

                {thinking && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
                      擎
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.3s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* 选项面板 */}
              <div className="px-4 py-4 bg-white border-t border-slate-100 space-y-2 min-h-[88px]">
                {options.length > 0 ? (
                  options.map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => handleSelect(opt)}
                      className={
                        opt.variant === "muted"
                          ? "w-full text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-300 transition-all active:scale-[0.98]"
                          : "w-full text-left py-2.5 px-4 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold rounded-xl border border-brand-200/60 transition-all active:scale-[0.98]"
                      }
                    >
                      {opt.text}
                    </button>
                  ))
                ) : (
                  <div className="text-center text-xs text-slate-400 py-4">助理正在输入…</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
