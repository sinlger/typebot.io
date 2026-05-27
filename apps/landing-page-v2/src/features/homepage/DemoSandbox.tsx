import { useState, useRef, useEffect, useCallback } from "react";
import { WechatModal, useToast, Toast } from "@/components/WechatModal";

const SOURCE_MAP: Record<string, string> = {
  tencent_ads: "腾讯社交朋友圈广告",
  ocean_engine: "抖音/巨量引擎推广信息流",
  baidu_ads: "百度搜索竞价推荐",
  red_search: "小红书种草精准搜索",
  direct: "微信直接访问/朋友圈分享",
};

type LogType = "info" | "success" | "api" | "warn";

interface LogEntry {
  time: string;
  message: string;
  type: LogType;
}

interface LeadData {
  name: string;
  phone: string;
  intent: string;
}

export function DemoSandbox() {
  // UTM params
  const [utmSource, setUtmSource] = useState("tencent_ads");
  const [utmMedium, setUtmMedium] = useState("feed");
  const [utmCampaign, setUtmCampaign] = useState("xiaoxitong_2026");

  // Chat state
  const [messages, setMessages] = useState<React.ReactNode[]>([]);
  const [inputArea, setInputArea] = useState<React.ReactNode>(null);
  const [lead, setLead] = useState<LeadData>({ name: "", phone: "", intent: "" });

  // Terminal logs
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Modal & toast
  const [wechatModalOpen, setWechatModalOpen] = useState(false);
  const [assignedWechat, setAssignedWechat] = useState("TypeFlow_SaaS_99");
  const { toast, showToast } = useToast();

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Auto-scroll chat
  const chatRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, inputArea]);

  const getTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  };

  const addLog = useCallback((message: string, type: LogType = "info") => {
    setLogs((prev) => [...prev, { time: getTime(), message, type }]);
  }, []);

  const logColors: Record<LogType, string> = {
    info: "text-slate-400",
    success: "text-emerald-400 font-semibold",
    api: "text-sky-400",
    warn: "text-amber-500",
  };

  // Chat message helpers
  const appendBot = useCallback(
    (text: string, card?: string) => {
      setMessages((prev) => [
        ...prev,
        <div key={prev.length} className="flex items-start space-x-2.5">
          <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
            <i className="fa-solid fa-comment-dots" />
          </div>
          <div className="bg-white border border-slate-200/80 text-slate-700 px-3.5 py-2.5 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%] shadow-sm space-y-2">
            <p dangerouslySetInnerHTML={{ __html: text }} />
            {card && (
              <div
                className="mt-2 p-2 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-400"
                dangerouslySetInnerHTML={{ __html: card }}
              />
            )}
          </div>
        </div>,
      ]);
    },
    []
  );

  const appendUser = useCallback((text: string) => {
    setMessages((prev) => [
      ...prev,
      <div key={prev.length} className="flex items-start justify-end space-x-2.5">
        <div className="bg-[#3B82F6] text-white px-3.5 py-2.5 rounded-2xl rounded-tr-none text-xs leading-relaxed max-w-[85%] shadow-md shadow-blue-500/10">
          <p>{text}</p>
        </div>
      </div>,
    ]);
  }, []);

  const showTyping = useCallback(() => {
    setMessages((prev) => [
      ...prev,
      <div key={`typing-${prev.length}`} id="demo-typing" className="flex items-start space-x-2.5">
        <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0">
          <i className="fa-solid fa-comment-dots animate-pulse" />
        </div>
        <div className="bg-white border border-slate-200/80 text-slate-300 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center space-x-1 shadow-sm">
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
        </div>
      </div>,
    ]);
  }, []);

  const removeTyping = useCallback(() => {
    setMessages((prev) => prev.filter((m) => !(m.props && m.props.id === "demo-typing")));
  }, []);

  // UTM URL
  const demoUrl = `https://ads.kuaijing.cn/typeflow?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(demoUrl).then(() => {
      showToast("🔗 注入链接已拷贝到粘贴板！");
    });
  };

  // Flow steps
  const runFlow = useCallback(() => {
    showTyping();
    setTimeout(() => {
      removeTyping();
      const sourceText = SOURCE_MAP[utmSource] || "快境营销渠道";
      addLog(`[智能欢迎] 自动感应客户进站渠道：【${sourceText}】`);

      appendBot(
        `您好！发现您是从 <b>${sourceText}</b> 点击咨询的。我是您的数字化转型获客助手。<br><br>在过去 30 天，我们成功帮助 100+ 家本地商户、小企业降低了 45% 的点击流失，并提升了 6.2 倍的企微加粉量。<br><br><b>在广告获客上，您目前面临的最大痛点是什么？</b>`
      );

      setInputArea(
        <div className="flex flex-col space-y-1.5 w-full text-xs">
          <button
            onClick={() => selectPain("A", "国内点击单价越来越高，加微信/拨打电话的转化率很低")}
            className="w-full text-left px-3 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#3B82F6] rounded-xl border border-slate-200 transition flex items-center justify-between"
          >
            <span>A. 推广点击单价贵，获客转化极低</span>
            <i className="fa-solid fa-chevron-right text-[8px] text-slate-400" />
          </button>
          <button
            onClick={() => selectPain("B", "客户填完表单经常联系不上、电话空号或乱填，损耗极大")}
            className="w-full text-left px-3 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#3B82F6] rounded-xl border border-slate-200 transition flex items-center justify-between"
          >
            <span>B. 销售跟进流失大，虚假电话号码多</span>
            <i className="fa-solid fa-chevron-right text-[8px] text-slate-400" />
          </button>
        </div>
      );
    }, 600);
  }, [utmSource, showTyping, removeTyping, addLog, appendBot]);

  const selectPain = useCallback(
    (code: string, text: string) => {
      appendUser(text);
      setInputArea(null);
      setLead((prev) => ({ ...prev, intent: code }));
      addLog(`[意图标签] 归因归类此用户的痛点为：【国内典型场景 ${code}】`, "success");

      showTyping();
      setTimeout(() => {
        removeTyping();

        const reply =
          code === "A"
            ? `<b>确实！点击成本太贵，而生硬的静态广告页面最容易被无情关闭。</b><br><br>快境 TypeFlow 重构版能够让每一级选项进行静默部分提交。即便客户中途流失，之前输入的手机号等数据也能实时保存入库，直接为企业止损。`
            : `<b>这是典型痛点：很多客户习惯乱填表单或者由于销售跟进太慢而反悔。</b><br><br>我们提供手机号段格式验证、一键呼出企业微信客服。让客户无缝添加销售微信，将留资用户秒级沉淀在您的私域，避免无效号码浪费精力。`;

        appendBot(reply);
        askName();
      }, 800);
    },
    [appendUser, showTyping, removeTyping, addLog, appendBot]
  );

  const askName = useCallback(() => {
    showTyping();
    setTimeout(() => {
      removeTyping();
      appendBot("为方便系统调取您对应行业的方案报告，请问怎么称呼您呢？");
      setInputArea(
        <div className="flex items-center space-x-2 w-full text-xs">
          <input
            ref={nameRef}
            type="text"
            placeholder="您的称呼 (如: 陈经理)"
            className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#3B82F6] text-slate-700"
            onKeyDown={(e) => e.key === "Enter" && submitName()}
          />
          <button
            onClick={submitName}
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-4 py-2 rounded-lg transition"
          >
            确认
          </button>
        </div>
      );
      nameRef.current?.focus();
    }, 600);
  }, [showTyping, removeTyping, appendBot]);

  const submitName = useCallback(() => {
    const name = nameRef.current?.value.trim();
    if (!name) return;
    setLead((prev) => ({ ...prev, name }));
    appendUser(`在下：${name}`);
    setInputArea(null);
    addLog(
      `[无感部分暂存] 已提前记录字段：【姓名 = ${name}】。即便用户现在关闭页面，此数据也不会流失！`,
      "warn"
    );
    askPhone(name);
  }, [appendUser, addLog]);

  const askPhone = useCallback(
    (name: string) => {
      showTyping();
      setTimeout(() => {
        removeTyping();
        appendBot(
          `谢谢，${name}。最后请留下您的<b>微信或手机号</b>，系统分配的获客顾问老师会将定制化的《小企业获客破局方案》直接微信发给您：`
        );
        setInputArea(
          <div className="flex flex-col space-y-2 w-full text-xs">
            <div className="flex items-center space-x-2">
              <input
                ref={phoneRef}
                type="text"
                placeholder="微信号或11位手机号"
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#3B82F6] text-slate-700"
                onKeyDown={(e) => e.key === "Enter" && submitPhone()}
              />
              <button
                onClick={submitPhone}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-4 py-2 rounded-lg transition"
              >
                完成并提交
              </button>
            </div>
          </div>
        );
        phoneRef.current?.focus();
      }, 600);
    },
    [showTyping, removeTyping, appendBot]
  );

  const submitPhone = useCallback(() => {
    const phone = phoneRef.current?.value.trim();
    if (!phone) return;
    setLead((prev) => ({ ...prev, phone }));
    appendUser(`联系方式：${phone}`);
    setInputArea(null);
    triggerWebhook(phone);
  }, [appendUser]);

  const triggerWebhook = useCallback(
    (phone: string) => {
      showTyping();
      addLog("[触发国内 Webhook] 将归因数据 and 联系方式秒级投递至企业后端...", "api");

      const serviceWechat = "kuaijing_SaaS_service";

      setTimeout(() => {
        removeTyping();
        addLog("⚡️ 接口响应成功 (HTTP 200 OK)! 线索已同步入库！", "success");

        const payload = {
          event: "domestic_typeflow_conversion",
          timestamp: Math.floor(Date.now() / 1000),
          data: { lead_name: lead.name, lead_phone: phone, intent: lead.intent },
          attribution: { utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign },
        };
        addLog(`发送载荷: \n${JSON.stringify(payload, null, 2)}`, "api");

        setAssignedWechat(serviceWechat);

        appendBot(
          `<b>恭喜您，${lead.name}！专属对接顾问分配成功！</b><br><br>系统已为您秒级智能分配了我们官方大客户顾问。您可以点击下方按钮一键复制微信号并直接拉起微信添加，即刻领取解决方案：`,
          `<div class="text-center py-2 bg-slate-50 border border-slate-100 rounded-xl space-y-1 text-[10px] text-slate-400">
            <span>分配顾问微信号</span>
            <p class="text-xs font-bold font-mono text-[#3B82F6] bg-white border border-slate-200 px-2.5 py-0.5 rounded inline-block select-all">${serviceWechat}</p>
          </div>`
        );

        setInputArea(
          <button
            onClick={() => executeRedirect(serviceWechat)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10"
          >
            <i className="fa-brands fa-weixin text-sm" />
            <span>一键复制并唤醒微信</span>
          </button>
        );
      }, 1000);
    },
    [lead, utmSource, utmMedium, utmCampaign, showTyping, removeTyping, addLog, appendBot]
  );

  const executeRedirect = (wechatId: string) => {
    navigator.clipboard.writeText(wechatId).then(() => {
      addLog(`[剪贴板成功] 微信：[${wechatId}] 已经写入用户剪切板。`, "success");
      showToast("微信号复制成功！");
      setTimeout(() => {
        setAssignedWechat(wechatId);
        setWechatModalOpen(true);
        addLog("[微信重定向] 已尝试向操作系统发出唤醒指令: weixin://", "warn");
      }, 600);
    });
  };

  const resetChat = () => {
    setMessages([]);
    setInputArea(null);
    setLead({ name: "", phone: "", intent: "" });
    setLogs([]);
    addLog("🧹 沙盒交互环境已重置！");
    setTimeout(() => runFlow(), 100);
  };

  // Initial load
  useEffect(() => {
    runFlow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="demo" className="py-16 md:py-24 bg-slate-50/20 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-indigo-500 text-xs font-bold tracking-widest uppercase">真实沙盒仿真</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">亲手试一试：体验高转化极速留资</h2>
          <p className="text-slate-400 text-xs sm:text-sm">左侧为您模拟了国内最常见的广告渠道参数注入，右侧则是生成的仿真极简对话流程。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Controls + Terminal */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* UTM Params */}
            <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-nodes text-[#3B82F6]" />
                  第一步：模拟改变不同的国内推广渠道
                </h3>
                <span className="text-[9px] text-slate-400 font-mono">Parameters</span>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-1">广告流量平台 (utm_source)</label>
                  <select
                    value={utmSource}
                    onChange={(e) => {
                      setUtmSource(e.target.value);
                      addLog(`发现流量变量转移。已成功捕捉渠道参数：[${e.target.value}]`);
                    }}
                    className="w-full text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#3B82F6] text-slate-700 transition"
                  >
                    <option value="tencent_ads">腾讯广告 (朋友圈 / 公众号 / 视频号)</option>
                    <option value="ocean_engine">巨量引擎 (抖音推广 / 巨量千川)</option>
                    <option value="baidu_ads">百度推广 (搜索推广 / 竞价关键词)</option>
                    <option value="red_search">小红书信息流 (KOL / 蒲公英获客)</option>
                    <option value="direct">Direct (扫码或微信直接访问)</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">推广形式 (medium)</label>
                    <input
                      type="text"
                      value={utmMedium}
                      onChange={(e) => setUtmMedium(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#3B82F6] text-slate-700 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">计划名称 (campaign)</label>
                    <input
                      type="text"
                      value={utmCampaign}
                      onChange={(e) => setUtmCampaign(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#3B82F6] text-slate-700 transition"
                    />
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200/50 shadow-inner">
                  <span className="text-[9px] text-slate-400 block mb-0.5 font-bold">🔗 动态捕获并注入对话的落地 URL：</span>
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-mono text-[9px] text-[#3B82F6] truncate select-all">{demoUrl}</span>
                    <button onClick={copyUrl} className="text-slate-400 hover:text-[#3B82F6] transition text-xs" title="复制链接">
                      <i className="fa-regular fa-copy" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex-1 flex flex-col justify-between min-h-[220px] shadow-lg shadow-slate-900/10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  TypeFlow 数据流日志分析器
                </span>
                <button
                  onClick={() => {
                    setLogs([]);
                    showToast("日志已清空");
                  }}
                  className="text-[9px] text-slate-500 hover:text-slate-300"
                >
                  清空
                </button>
              </div>
              <div ref={terminalRef} className="flex-1 font-mono text-[10px] text-slate-400 py-3 space-y-2 h-40 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className={logColors[log.type]}>
                    <span className="text-slate-600">[{log.time}]</span> {log.message}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chat window */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl flex flex-col min-h-[480px]">
            {/* Chat header */}
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    <i className="fa-solid fa-comment-dots" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-50" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-slate-800 leading-none mb-0.5">在线客服 AI 助理</h3>
                  <p className="text-[9px] text-slate-400">⚡️ 清新交互 · 专为国内小企业设计</p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="text-slate-500 hover:text-[#3B82F6] text-xs bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 transition flex items-center gap-1"
              >
                <i className="fa-solid fa-rotate-left text-[9px]" />
                <span>重置</span>
              </button>
            </div>

            {/* Chat messages */}
            <div ref={chatRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/30 min-h-[250px] flex flex-col">
              {messages}
            </div>

            {/* Input area */}
            <div className="p-3 bg-white border-t border-slate-100 flex flex-col justify-center min-h-[60px]">
              {inputArea}
            </div>
          </div>
        </div>
      </div>

      <WechatModal isOpen={wechatModalOpen} onClose={() => setWechatModalOpen(false)} wechatId={assignedWechat} />
      <Toast message={toast.message} visible={toast.visible} />
    </section>
  );
}
