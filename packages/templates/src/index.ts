export type TemplateUseCase =
  | "线索生成"
  | "客户支持"
  | "AI 聊天"
  | "问答与调查"
  | "电商"
  | "线索磁铁"
  | "用户引导"
  | "娱乐";

export type TemplateFeature =
  | "AI 驱动"
  | "支付集成"
  | "文件上传";

export type TemplateCategory = "marketing" | "product";

export type TemplateHighlight = {
  title: string;
  description: string;
};

export type TemplateDefinition = {
  name: string;
  summary: string;
  description: string;
  emoji: string;
  fileName: string;
  category?: TemplateCategory;
  useCase: TemplateUseCase;
  features: TemplateFeature[];
  highlights: TemplateHighlight[];
  bestFor: string[];
  collects?: string[];
  backgroundColor?: string;
  isComingSoon?: boolean;
  isNew?: boolean;
  updatedAt: string;
};

export type Template = TemplateDefinition & {
  id: string;
  slug: string;
};

const templateUpdatedAt = "2026-01-05";

const templateDefinitions = [
  {
    name: "线索生成",
    emoji: "🤝",
    fileName: "lead-gen.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "线索生成",
    features: [],
    summary: "一个线索生成聊天机器人模板，可快速捕获联系信息并筛选潜在客户。",
    description:
      "使用此聊天机器人欢迎新访客，提出简短友好的问题。它收集正确的联系信息和意向，以便您的销售团队跟进。流程简短、清晰且易于自定义。",
    highlights: [
      {
        title: "目标",
        description: "将访客转化为合格的线索。",
      },
      {
        title: "流程",
        description: "友好问候、快速提问、收集联系信息。",
      },
      {
        title: "成果",
        description: "更清晰的线索数据，助力快速跟进。",
      },
    ],
    bestFor: ["B2B 网站", "代理商咨询页", "服务型企业"],
    collects: ["姓名", "邮箱", "公司或职位", "项目需求"],
  },
  {
    name: "客户支持",
    emoji: "😍",
    fileName: "customer-support.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "客户支持",
    features: [],
    summary:
      "一个客户支持聊天机器人模板，可回答常见问题并分流问题。",
    description:
      "在问题到达收件箱之前处理重复提问。此聊天机器人分享清晰的答案并引导用户找到正确的帮助路径。必要时将复杂问题转接给人工客服。",
    highlights: [
      {
        title: "目标",
        description: "减轻客服压力，同时更快地帮助用户。",
      },
      {
        title: "流程",
        description: "选择主题、获取答案、必要时升级处理。",
      },
      {
        title: "成果",
        description: "更少的工单和更满意的客户。",
      },
    ],
    bestFor: ["SaaS 帮助中心", "电商客服", "内部 IT 支持"],
    collects: ["问题类型", "订单或账户信息", "联系邮箱"],
  },
  {
    name: "趣味问答",
    emoji: "🕹️",
    fileName: "quiz.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "问答与调查",
    features: [],
    summary:
      "一个趣味问答聊天机器人模板，可提出有趣的问题并展示清晰的结果。",
    description:
      "运行一个简短的问答活动，让用户从头到尾保持参与。聊天机器人每次提问一个问题，最后展示结果。适用于教育、营销或娱乐场景。",
    highlights: [
      {
        title: "目标",
        description: "通过简短有趣的问答吸引访客。",
      },
      {
        title: "流程",
        description: "逐题提问，最后展示结果页。",
      },
      {
        title: "成果",
        description: "更高的完成率和清晰的评估结果。",
      },
    ],
    bestFor: ["营销活动", "课程创作者", "社群运营"],
    collects: ["问答答案", "得分或结果", "可选邮箱"],
  },
  {
    name: "线索评分",
    emoji: "🏆",
    fileName: "lead-scoring.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "线索生成",
    features: [],
    summary:
      "一个线索评分聊天机器人模板，通过简单评分筛选潜在客户。",
    description:
      "提出合适的问题来了解匹配度、预算和时机。聊天机器人为每条线索评分，让您的团队知道谁应该优先联系。对访客而言体验简短明了。",
    highlights: [
      {
        title: "目标",
        description: "对线索进行评分，让销售聚焦最优客户。",
      },
      {
        title: "流程",
        description: "简短筛选问题，输出清晰评分。",
      },
      {
        title: "成果",
        description: "更优的优先级排序和更快的响应时间。",
      },
    ],
    bestFor: ["销售团队", "高意向产品", "代理商"],
    collects: ["使用场景", "预算范围", "时间规划", "联系信息"],
  },
  {
    name: "线索磁铁",
    emoji: "🧲",
    fileName: "lead-magnet.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "线索磁铁",
    features: [],
    summary:
      "一个线索磁铁聊天机器人模板，通过交换联系信息提供下载资源。",
    description:
      "通过友好的对话提供指南、清单或模板。聊天机器人索要邮箱后立即交付资源。同时标记兴趣标签，以便后续发送针对性的跟进信息。",
    highlights: [
      {
        title: "目标",
        description: "通过有价值的资源扩充邮件列表。",
      },
      {
        title: "流程",
        description: "提供价值、收集邮箱、交付文件。",
      },
      {
        title: "成果",
        description: "更多注册量，附带清晰的意向数据。",
      },
    ],
    bestFor: ["内容营销人员", "创作者", "邮件列表增长"],
    collects: ["邮箱", "感兴趣的话题"],
  },
  {
    name: "产品推荐",
    emoji: "🍫",
    fileName: "product-recommendation.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "电商",
    features: [],
    backgroundColor: "#010000",
    summary:
      "一个产品推荐聊天机器人模板，帮购物者找到合适的商品。",
    description:
      "通过几个简单的偏好问题帮助购物者做出选择。聊天机器人缩小选项范围并推荐匹配的产品。还可以直接链接到产品详情页。",
    highlights: [
      {
        title: "目标",
        description: "更快地引导购物者找到最佳产品。",
      },
      {
        title: "流程",
        description: "询问偏好，推荐匹配项。",
      },
      {
        title: "成果",
        description: "更高的转化率和更低的跳出率。",
      },
    ],
    bestFor: ["电商店铺", "订阅盒子", "零售目录"],
    collects: ["偏好", "预算", "使用场景"],
  },
  {
    name: "NPS 调查",
    emoji: "⭐",
    fileName: "nps.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "问答与调查",
    features: [],
    summary:
      "一个 NPS 调查聊天机器人模板，一分钟内衡量用户忠诚度。",
    description:
      "以友好轻量的互动流程询问经典的 NPS 问题。聊天机器人收集评分和简短原因。可用于追踪客户满意度并及早发现问题。",
    highlights: [
      {
        title: "目标",
        description: "通过快速 NPS 流程衡量用户忠诚度。",
      },
      {
        title: "流程",
        description: "先评分，然后询问简短原因。",
      },
      {
        title: "成果",
        description: "可快速行动的清晰反馈。",
      },
    ],
    bestFor: ["SaaS 团队", "客户成功", "产品反馈"],
    collects: ["NPS 评分", "原因", "可选联系方式"],
  },
  {
    name: "用户引导",
    emoji: "🧑‍🚀",
    fileName: "onboarding.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "用户引导",
    features: [],
    summary:
      "一个用户引导聊天机器人模板，引导新用户完成初始步骤。",
    description:
      "欢迎新用户并展示关键操作。聊天机器人分享资源并逐步检查进度。减少流失并帮助用户更快获得成功。",
    highlights: [
      {
        title: "目标",
        description: "帮助新用户达成首次成功。",
      },
      {
        title: "流程",
        description: "简短清单、链接和进度提醒。",
      },
      {
        title: "成果",
        description: "更好的激活率和更低的流失率。",
      },
    ],
    bestFor: ["SaaS 产品", "新客户培训", "内部工具"],
    collects: ["角色", "目标", "进度状态"],
  },
  {
    name: "数字产品支付",
    emoji: "🖼️",
    fileName: "digital-product-payment.json",
    updatedAt: templateUpdatedAt,
    useCase: "电商",
    features: ["支付集成"],
    summary:
      "一个数字产品支付聊天机器人模板，在对话中完成下载销售。",
    description:
      "通过简短聊天流程销售数字产品。聊天机器人介绍产品、收集邮箱并完成支付。专为流畅专注的结账体验而设计。",
    highlights: [
      {
        title: "目标",
        description: "将兴趣转化为付费下载。",
      },
      {
        title: "流程",
        description: "介绍产品、收集邮箱、完成支付。",
      },
      {
        title: "成果",
        description: "快速且个性化的结账体验。",
      },
    ],
    bestFor: ["创作者", "在线课程", "数字下载"],
    collects: ["邮箱", "支付信息", "收据偏好"],
  },
  {
    name: "常见问题",
    emoji: "💬",
    fileName: "faq.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "客户支持",
    features: [],
    summary: "一个常见问题聊天机器人模板，快速呈现正确答案。",
    description:
      "将您的高频问题转化为快速自助服务体验。聊天机器人引导用户找到正确的主题并分享清晰的答案。降低客服工单量，提高满意度。",
    highlights: [
      {
        title: "目标",
        description: "几秒内回答常见问题。",
      },
      {
        title: "流程",
        description: "选择主题、阅读答案、继续提问。",
      },
      {
        title: "成果",
        description: "更少的客服压力和更快的帮助。",
      },
    ],
    bestFor: ["帮助中心", "产品团队", "服务型企业"],
    collects: ["问题主题", "是否有帮助"],
  },
  {
    name: "电影推荐",
    emoji: "🍿",
    fileName: "movie-recommendation.json",
    updatedAt: templateUpdatedAt,
    useCase: "娱乐",
    features: [],
    summary:
      "一个电影推荐聊天机器人模板，根据喜好推荐影片。",
    description:
      "询问心情、类型和喜好，然后推荐一部电影。聊天机器人保持轻松有趣的氛围。非常适合演示或娱乐互动。",
    highlights: [
      {
        title: "目标",
        description: "提供有趣快速的推荐。",
      },
      {
        title: "流程",
        description: "收集偏好，推荐片单。",
      },
      {
        title: "成果",
        description: "用户乐于分享的有趣体验。",
      },
    ],
    bestFor: ["社区网站", "产品演示", "娱乐品牌"],
    collects: ["类型", "心情", "喜欢的电影"],
  },
  {
    name: "基础 ChatGPT",
    emoji: "🤖",
    fileName: "basic-chat-gpt.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI 聊天",
    features: ["AI 驱动"],
    summary:
      "一个基础 AI 聊天机器人模板，用于开放式问答和快速回复。",
    description:
      "通过 ChatGPT 提供简单的 AI 聊天体验。聊天机器人回答问题并保持对话开放。可作为高级 AI 流程的基础模板。",
    highlights: [
      {
        title: "目标",
        description: "快速启动灵活 AI 聊天体验。",
      },
      {
        title: "流程",
        description: "用户提问，AI 回复，持续对话。",
      },
      {
        title: "成果",
        description: "可扩展的纯净基础模板。",
      },
    ],
    bestFor: ["AI 演示", "内部助手", "FAQ 实验"],
    collects: ["用户问题"],
  },
  {
    name: "音频 ChatGPT",
    emoji: "🤖",
    fileName: "audio-chat-gpt.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI 聊天",
    features: ["AI 驱动", "文件上传"],
    summary:
      "一个音频 AI 聊天机器人模板，支持语音输入和语音回复。",
    description:
      "让用户发送语音输入并获得语音输出。聊天机器人在一个流程中处理音频上传和回复。非常适合免提或无障碍使用场景。",
    highlights: [
      {
        title: "目标",
        description: "让 AI 聊天支持语音交互。",
      },
      {
        title: "流程",
        description: "录制音频、上传、收听回复。",
      },
      {
        title: "成果",
        description: "友好现代的语音体验。",
      },
    ],
    bestFor: ["语音体验", "无障碍场景", "移动端演示"],
    collects: ["音频消息", "可选文本"],
  },
  {
    name: "ChatGPT 角色",
    emoji: "🎭",
    fileName: "chat-gpt-personas.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI 聊天",
    features: ["AI 驱动"],
    summary:
      "一个 AI 角色聊天机器人模板，让用户选择不同的个性风格。",
    description:
      "提供多个具有鲜明风格或角色的 AI 角色。聊天机器人询问用户想和谁对话并设定相应语气。这是一种探索 AI 行为的有趣方式。",
    highlights: [
      {
        title: "目标",
        description: "展示 AI 语气如何随角色变化。",
      },
      {
        title: "流程",
        description: "选择角色，开始对话。",
      },
      {
        title: "成果",
        description: "有趣且令人印象深刻的 AI 演示。",
      },
    ],
    bestFor: ["产品演示", "教育场景", "品牌声音"],
    collects: ["角色选择", "用户问题"],
  },
  {
    name: "AI 线索生成",
    emoji: "🦾",
    fileName: "lead-gen-ai.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "线索生成",
    features: ["AI 驱动"],
    summary:
      "一个 AI 线索生成聊天机器人模板，通过智能跟进筛选潜在客户。",
    description:
      "在线索捕获过程中使用 AI 提出更好的跟进问题。聊天机器人根据回答自适应调整，保持流程简短。为团队提供更丰富的线索上下文。",
    highlights: [
      {
        title: "目标",
        description: "收集更有价值的线索信息。",
      },
      {
        title: "流程",
        description: "简短提问配合 AI 智能跟进。",
      },
      {
        title: "成果",
        description: "更高质量的线索和更清晰的交接。",
      },
    ],
    bestFor: ["销售团队", "B2B 产品", "代理商"],
    collects: ["目标", "预算", "时间规划", "联系信息"],
  },
  {
    name: "保险报价",
    emoji: "🐶",
    fileName: "dog-insurance-offer.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "电商",
    features: [],
    summary:
      "一个保险报价聊天机器人模板，帮用户找到合适的方案。",
    description:
      "收集基本信息并推荐最佳方案。聊天机器人保持问题简单明了。适用于报价请求和方案比较。",
    highlights: [
      {
        title: "目标",
        description: "引导用户选择最合适的保障方案。",
      },
      {
        title: "流程",
        description: "询问关键信息，呈现推荐方案。",
      },
      {
        title: "成果",
        description: "更多高质量的报价请求。",
      },
    ],
    bestFor: ["保险经纪人", "报价漏斗", "线索捕获"],
    collects: ["保障需求", "家庭信息", "联系信息"],
  },
  {
    name: "OpenAI 条件逻辑",
    emoji: "🧠",
    fileName: "openai-conditions.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI 聊天",
    features: ["AI 驱动"],
    summary:
      "一个 AI 条件逻辑聊天机器人模板，根据用户意图进行分流。",
    description:
      "使用 AI 检测用户意图并触发正确的对话路径。聊天机器人可根据自然语言进行分支，而非固定规则。是智能路由的良好起点。",
    highlights: [
      {
        title: "目标",
        description: "根据用户提问内容进行路由分发。",
      },
      {
        title: "流程",
        description: "捕获意图，分发到正确分支。",
      },
      {
        title: "成果",
        description: "更智能的流程，更少的手动逻辑。",
      },
    ],
    bestFor: ["客服分流", "线索路由", "产品发现"],
    collects: ["用户消息", "检测到的意图"],
  },
  {
    name: "高价值线索跟进",
    emoji: "📞",
    fileName: "high-ticket-lead-follow-up.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "线索生成",
    features: ["AI 驱动"],
    summary:
      "一个高价值线索跟进聊天机器人模板，筛选真正有购买意向的客户。",
    description:
      "在线索磁铁或演示请求之后进行跟进。聊天机器人深入询问预算、需求和决策流程。过滤掉低匹配度的线索，节省时间。",
    highlights: [
      {
        title: "目标",
        description: "聚焦高匹配度的潜在客户。",
      },
      {
        title: "流程",
        description: "询问预算、需求和决策时间。",
      },
      {
        title: "成果",
        description: "更精准的筛选，更少的电话沟通。",
      },
    ],
    bestFor: ["高价服务", "代理商", "咨询顾问"],
    collects: ["预算", "决策时间", "痛点", "联系信息"],
  },
  {
    name: "快速碳水计算器",
    emoji: "🏃‍♂️",
    fileName: "quick-carb-calculator.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "娱乐",
    features: [],
    summary:
      "一个碳水计算聊天机器人模板，快速提供能量补充建议。",
    description:
      "通过几个简单问题给出碳水摄入估算。聊天机器人让计算变得轻松快捷。非常适合运动或营养品牌。",
    highlights: [
      {
        title: "目标",
        description: "提供快速实用的计算结果。",
      },
      {
        title: "流程",
        description: "收集基本信息，展示估算结果。",
      },
      {
        title: "成果",
        description: "用户能快速完成的有用工具。",
      },
    ],
    bestFor: ["运动品牌", "教练", "健康内容"],
    collects: ["体重", "活动水平", "训练时长"],
  },
  {
    name: "肤质分析",
    emoji: "💆‍♀️",
    fileName: "skin-typology.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "电商",
    features: ["AI 驱动"],
    summary:
      "一个肤质分析聊天机器人模板，根据回答推荐护肤方案。",
    description:
      "询问肤质、关注点和目标，然后给出个性化推荐。聊天机器人给人一种快速咨询的感觉。非常适合美妆和护肤品牌。",
    highlights: [
      {
        title: "目标",
        description: "帮用户匹配最合适的护肤方案。",
      },
      {
        title: "流程",
        description: "询问肤质问题，推荐产品。",
      },
      {
        title: "成果",
        description: "更自信的购物者和更高的购买意向。",
      },
    ],
    bestFor: ["护肤品牌", "美妆零售商", "线索磁铁"],
    collects: ["肤质", "关注问题", "护肤目标"],
  },
  {
    name: "OpenAI 助手聊天",
    emoji: "🤖",
    fileName: "openai-assistant-chat.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI 聊天",
    features: ["AI 驱动"],
    summary:
      "一个 OpenAI 助手聊天机器人模板，用于任务导向的 AI 对话。",
    description:
      "与您的 OpenAI 助手直接对话。聊天机器人专注于快速完成任务并给出清晰答案。可作为智能助手的起点。",
    highlights: [
      {
        title: "目标",
        description: "快速构建一个专注的 AI 助手。",
      },
      {
        title: "流程",
        description: "用户提问，助手以任务优先的方式回复。",
      },
      {
        title: "成果",
        description: "AI 工作流的纯净基础模板。",
      },
    ],
    bestFor: ["内部工具", "AI 助手", "原型开发"],
    collects: ["任务请求"],
  },
  {
    name: "省钱计算器",
    emoji: "💰",
    fileName: "savings-estimator.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "电商",
    features: [],
    summary:
      "一个省钱计算聊天机器人模板，向用户展示可以节省多少。",
    description:
      "通过几个简短问题计算简单的节省估算。聊天机器人以清晰的方式突出产品的价值。非常适合电商或订阅服务。",
    highlights: [
      {
        title: "目标",
        description: "通过快速估算展示产品价值。",
      },
      {
        title: "流程",
        description: "收集使用数据，展示节省金额。",
      },
      {
        title: "成果",
        description: "更强的价值感知和购买意向。",
      },
    ],
    bestFor: ["电商品牌", "订阅产品", "价值页面"],
    collects: ["当前支出", "使用频率", "联系信息"],
  },
] satisfies TemplateDefinition[];

export const useCases: TemplateUseCase[] = [
  "线索生成",
  "客户支持",
  "AI 聊天",
  "问答与调查",
  "电商",
  "线索磁铁",
  "用户引导",
  "娱乐",
];

export const features: TemplateFeature[] = [
  "AI 驱动",
  "支付集成",
  "文件上传",
];

export const templates: Template[] = templateDefinitions.map(
  (template, index) => {
    const slug = template.fileName.replace(".json", "");
    return {
      ...template,
      id: `template-${index + 1}`,
      slug,
    };
  },
);

export const getTemplateBySlug = (slug: string) =>
  templates.find((template) => template.slug === slug);
