export type TemplateUseCase =
  | "Lead Generation"
  | "Customer Support"
  | "AI Chat"
  | "Quiz & Survey"
  | "E-commerce"
  | "Lead Magnets"
  | "Onboarding"
  | "Entertainment";

export type TemplateFeature =
  | "AI-powered"
  | "Payment integration"
  | "File upload";

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
    name: "潜在客户开发",
    emoji: "🤝",
    fileName: "lead-gen.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Generation",
    features: [],
    summary:
      "一个潜在客户开发聊天机器人模板，快速捕获联系信息并筛选潜在客户。",
    description:
      "使用此聊天机器人欢迎新访客并提出简短友好的问题。它会收集正确的联系方式和意图，方便您的销售团队跟进。流程简短清晰，易于定制。",
    highlights: [
      {
        title: "Goal",
        description: "将访客转化为合格线索。",
      },
      {
        title: "Flow",
        description: "热情问候、快速提问，然后收集联系方式。",
      },
      {
        title: "Result",
        description: "更清晰的线索数据，便于快速跟进。",
      },
    ],
    bestFor: ["B2B websites", "Agency inquiry pages", "Service businesses"],
    collects: ["Name", "Email", "Company or role", "Project needs"],
  },
  {
    name: "客户支持",
    emoji: "😍",
    fileName: "customer-support.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Customer Support",
    features: [],
    summary:
      "一个客户支持聊天机器人模板，回答常见问题并分流问题。",
    description:
      "在重复问题到达您的收件箱之前处理它们。此聊天机器人提供清晰的答案，并引导用户找到正确的帮助路径。必要时，它会将复杂问题转接给人工。",
    highlights: [
      {
        title: "Goal",
        description: "在更快帮助用户的同时减少支持负担。",
      },
      {
        title: "Flow",
        description: "选择主题、获取清晰答案，必要时升级处理。",
      },
      {
        title: "Result",
        description: "更少的工单和更满意的客户。",
      },
    ],
    bestFor: ["SaaS help centers", "E-commerce support", "Internal IT"],
    collects: ["Issue type", "Order or account info", "Contact email"],
  },
  {
    name: "测验",
    emoji: "🕹️",
    fileName: "quiz.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Quiz & Survey",
    features: [],
    summary:
      "一个测验聊天机器人模板，提出有趣的问题并显示清晰的结果。",
    description:
      "运行一个简短的测验，从头到尾吸引参与者。聊天机器人一次只问一个问题，并在最后显示结果。可用于教育、营销或娱乐。",
    highlights: [
      {
        title: "Goal",
        description: "通过简短友好的测验吸引访客。",
      },
      {
        title: "Flow",
        description: "一次一个问题，然后显示结果页面。",
      },
      {
        title: "Result",
        description: "更高的完成率和明确的结果。",
      },
    ],
    bestFor: ["Marketing campaigns", "Course creators", "Communities"],
    collects: ["Quiz answers", "Score or result", "Optional email"],
  },
  {
    name: "潜在客户评分",
    emoji: "🏆",
    fileName: "lead-scoring.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Generation",
    features: [],
    summary:
      "一个潜在客户评分聊天机器人模板，通过简单评分筛选潜在客户。",
    description:
      "提出正确的问题以了解匹配度、预算和时机。聊天机器人为每个潜在客户打分，让您的团队知道优先联系谁。它保持体验简短明了，适合访客。",
    highlights: [
      {
        title: "Goal",
        description: "对线索进行评分，让销售团队专注于最匹配的对象。",
      },
      {
        title: "Flow",
        description: "简短的资格问题，然后给出明确的分数。",
      },
      {
        title: "Result",
        description: "更好的优先级排序和更快的响应速度。",
      },
    ],
    bestFor: ["Sales teams", "High intent products", "Agencies"],
    collects: ["Use case", "Budget range", "Timeline", "Contact info"],
  },
  {
    name: "潜在客户磁铁",
    emoji: "🧲",
    fileName: "lead-magnet.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Magnets",
    features: [],
    summary:
      "一个潜在客户磁铁聊天机器人模板，以联系信息换取下载资源。",
    description:
      "通过友好的聊天提供指南、清单或模板。聊天机器人会要求输入电子邮件并立即交付资源。它还会标记兴趣点，以便您用合适的信息跟进。",
    highlights: [
      {
        title: "Goal",
        description: "用有价值的资源扩大您的列表。",
      },
      {
        title: "Flow",
        description: "提供价值、收集邮箱、交付文件。",
      },
      {
        title: "Result",
        description: "更多注册，并带有清晰的意向数据。",
      },
    ],
    bestFor: ["Content marketers", "Creators", "Newsletter growth"],
    collects: ["Email", "Interest topic"],
  },
  {
    name: "产品推荐",
    emoji: "🍫",
    fileName: "product-recommendation.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "E-commerce",
    features: [],
    backgroundColor: "#010000",
    summary:
      "一个产品推荐聊天机器人模板，将购物者匹配到合适的商品。",
    description:
      "通过询问几个简单的偏好问题帮助购物者做出选择。聊天机器人缩小选项范围并推荐合适的产品。它还可以直接链接到产品页面。",
    highlights: [
      {
        title: "Goal",
        description: "引导购物者更快找到最佳产品。",
      },
      {
        title: "Flow",
        description: "询问偏好，然后推荐匹配项。",
      },
      {
        title: "Result",
        description: "更高的转化率和更少的流失。",
      },
    ],
    bestFor: ["E-commerce stores", "Subscription boxes", "Retail catalogs"],
    collects: ["Preferences", "Budget", "Use case"],
  },
  {
    name: "NPS调查",
    emoji: "⭐",
    fileName: "nps.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Quiz & Survey",
    features: [],
    summary:
      "一个NPS调查聊天机器人模板，在一分钟内衡量忠诚度。",
    description:
      "以友好、轻量的流程询问经典的 NPS 问题。聊天机器人收集评分和简短原因。可用于跟踪客户情绪并及早发现问题。",
    highlights: [
      {
        title: "Goal",
        description: "通过快速的NPS流程衡量忠诚度。",
      },
      {
        title: "Flow",
        description: "先评分，然后询问简短原因。",
      },
      {
        title: "Result",
        description: "可快速行动的清晰反馈。",
      },
    ],
    bestFor: ["SaaS teams", "Customer success", "Product feedback"],
    collects: ["NPS score", "Reason", "Optional contact"],
  },
  {
    name: "用户引导",
    emoji: "🧑‍🚀",
    fileName: "onboarding.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Onboarding",
    features: [],
    summary:
      "一个用户引导聊天机器人模板，引导新用户完成第一步。",
    description:
      "欢迎新用户并展示他们需要采取的关键操作。聊天机器人分享资源并逐步检查进度。它能减少流失，帮助用户更快取得成功。",
    highlights: [
      {
        title: "Goal",
        description: "帮助新用户取得首次成功。",
      },
      {
        title: "Flow",
        description: "简短清单、链接和进度提示。",
      },
      {
        title: "Result",
        description: "更好的激活率和更低的流失率。",
      },
    ],
    bestFor: ["SaaS products", "New customer training", "Internal tools"],
    collects: ["Role", "Goal", "Progress status"],
  },
  {
    name: "数字产品支付",
    emoji: "🖼️",
    fileName: "digital-product-payment.json",
    updatedAt: templateUpdatedAt,
    useCase: "E-commerce",
    features: ["Payment integration"],
    summary:
      "一个数字产品支付聊天机器人模板，在聊天内销售下载资源。",
    description:
      "在简短的聊天流程中销售数字产品。聊天机器人解释产品、收集电子邮件并完成支付。它专为流畅、专注的结账体验而设计。",
    highlights: [
      {
        title: "Goal",
        description: "将兴趣转化为付费下载。",
      },
      {
        title: "Flow",
        description: "推介、收集邮箱，然后完成支付。",
      },
      {
        title: "Result",
        description: "快速且个性化的结账体验。",
      },
    ],
    bestFor: ["Creators", "Courses", "Digital downloads"],
    collects: ["Email", "Payment", "Receipt preference"],
  },
  {
    name: "常见问题",
    emoji: "💬",
    fileName: "faq.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    useCase: "Customer Support",
    features: [],
    summary: "一个常见问题聊天机器人模板，快速呈现正确答案。",
    description:
      "将您的常见问题转化为快速的自助服务体验。聊天机器人引导用户找到正确的主题并提供清晰的答案。它有助于减少工单数量，提高满意度。",
    highlights: [
      {
        title: "Goal",
        description: "在几秒钟内回答常见问题。",
      },
      {
        title: "Flow",
        description: "选择主题、阅读清晰答案，然后继续。",
      },
      {
        title: "Result",
        description: "更少的支持负担和更快的帮助。",
      },
    ],
    bestFor: ["Help centers", "Product teams", "Service businesses"],
    collects: ["Question topic", "Was this helpful"],
  },
  {
    name: "电影推荐",
    emoji: "🍿",
    fileName: "movie-recommendation.json",
    updatedAt: templateUpdatedAt,
    useCase: "Entertainment",
    features: [],
    summary:
      "一个电影推荐聊天机器人模板，根据喜好推荐电影。",
    description:
      "询问心情、类型和喜好，然后推荐电影。聊天机器人保持轻松有趣的氛围。非常适合演示或娱乐流程。",
    highlights: [
      {
        title: "Goal",
        description: "提供有趣、快速的推荐。",
      },
      {
        title: "Flow",
        description: "收集偏好，然后推荐一部电影。",
      },
      {
        title: "Result",
        description: "用户可分享的有趣体验。",
      },
    ],
    bestFor: ["Community sites", "Demos", "Entertainment brands"],
    collects: ["Genre", "Mood", "Favorite movie"],
  },
  {
    name: "基础ChatGPT",
    emoji: "🤖",
    fileName: "basic-chat-gpt.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI Chat",
    features: ["AI-powered"],
    summary:
      "一个基础AI聊天机器人模板，用于开放问题和快速回答。",
    description:
      "从由 ChatGPT 驱动的简单 AI 聊天体验开始。聊天机器人回答问题并保持对话开放。可将其用作更高级 AI 流程的基础。",
    highlights: [
      {
        title: "Goal",
        description: "启动快速、灵活的AI聊天体验。",
      },
      {
        title: "Flow",
        description: "用户提问，AI响应，重复。",
      },
      {
        title: "Result",
        description: "一个可扩展的干净基线。",
      },
    ],
    bestFor: ["AI demos", "Internal helpers", "FAQ experiments"],
    collects: ["User question"],
  },
  {
    name: "音频ChatGPT",
    emoji: "🤖",
    fileName: "audio-chat-gpt.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI Chat",
    features: ["AI-powered", "File upload"],
    summary:
      "一个音频AI聊天机器人模板，让用户说话并听到回复。",
    description:
      "让用户发送语音输入并获得语音输出。聊天机器人在一个流程中处理音频上传和响应。非常适合免提或无障碍使用场景。",
    highlights: [
      {
        title: "Goal",
        description: "让AI聊天支持语音。",
      },
      {
        title: "Flow",
        description: "录制音频、上传，然后听到回复。",
      },
      {
        title: "Result",
        description: "现代、友好的语音体验。",
      },
    ],
    bestFor: ["Voice experiences", "Accessibility", "Mobile demos"],
    collects: ["Audio message", "Optional text"],
  },
  {
    name: "ChatGPT角色",
    emoji: "🎭",
    fileName: "chat-gpt-personas.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI Chat",
    features: ["AI-powered"],
    summary:
      "一个AI角色聊天机器人模板，让用户选择人格。",
    description:
      "提供多个具有清晰风格或角色的 AI 人格。聊天机器人询问用户想和谁对话并设定语气。这是探索 AI 行为的趣味方式。",
    highlights: [
      {
        title: "Goal",
        description: "展示AI语气如何随角色变化。",
      },
      {
        title: "Flow",
        description: "选择角色，然后开始聊天。",
      },
      {
        title: "Result",
        description: "有趣、令人难忘的AI演示。",
      },
    ],
    bestFor: ["Demos", "Education", "Brand voices"],
    collects: ["Persona choice", "User question"],
  },
  {
    name: "AI驱动的潜在客户开发",
    emoji: "🦾",
    fileName: "lead-gen-ai.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Generation",
    features: ["AI-powered"],
    summary:
      "一个AI驱动的潜在客户开发聊天机器人模板，通过智能跟进筛选潜在客户。",
    description:
      "在捕获潜在客户时使用 AI 提出更好的跟进问题。聊天机器人根据回答调整并保持流程简短。它为您的团队提供更丰富的潜在客户背景信息。",
    highlights: [
      {
        title: "Goal",
        description: "收集带有更有用背景信息的线索。",
      },
      {
        title: "Flow",
        description: "简短问题加上AI跟进。",
      },
      {
        title: "Result",
        description: "更高质量的线索和更清晰的交接。",
      },
    ],
    bestFor: ["Sales teams", "B2B products", "Agencies"],
    collects: ["Goal", "Budget", "Timeline", "Contact info"],
  },
  {
    name: "保险报价",
    emoji: "🐶",
    fileName: "dog-insurance-offer.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "E-commerce",
    features: [],
    summary:
      "一个保险报价聊天机器人模板，将用户匹配到合适的计划。",
    description:
      "收集基本信息并推荐最佳方案。聊天机器人保持问题简单明了。非常适合报价请求和政策比较。",
    highlights: [
      {
        title: "Goal",
        description: "引导用户找到合适的保障选项。",
      },
      {
        title: "Flow",
        description: "询问关键细节，然后呈现报价。",
      },
      {
        title: "Result",
        description: "更高质量的报价请求。",
      },
    ],
    bestFor: ["Insurance brokers", "Quote funnels", "Lead capture"],
    collects: ["Coverage needs", "Household details", "Contact info"],
  },
  {
    name: "OpenAI条件逻辑",
    emoji: "🧠",
    fileName: "openai-conditions.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI Chat",
    features: ["AI-powered"],
    summary:
      "一个AI条件逻辑聊天机器人模板，根据意图路由用户。",
    description:
      "使用 AI 检测意图并触发正确的路径。聊天机器人可以根据自然语言而不是固定规则进行分支。它是智能路由的良好起点。",
    highlights: [
      {
        title: "Goal",
        description: "根据用户询问的内容进行路由。",
      },
      {
        title: "Flow",
        description: "捕获意图，然后发送到正确的分支。",
      },
      {
        title: "Result",
        description: "更智能的流程，更少的手动逻辑。",
      },
    ],
    bestFor: ["Support triage", "Lead routing", "Product discovery"],
    collects: ["User message", "Detected intent"],
  },
  {
    name: "高价值潜在客户跟进",
    emoji: "📞",
    fileName: "high-ticket-lead-follow-up.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Lead Generation",
    features: ["AI-powered"],
    summary:
      "一个高价值潜在客户跟进聊天机器人模板，筛选严肃的潜在客户。",
    description:
      "在潜在客户获取或演示请求后进行跟进。聊天机器人深入询问预算、需求和决策过程。它能筛选出匹配度低的线索，节省时间。",
    highlights: [
      {
        title: "Goal",
        description: "专注于高匹配度的潜在客户。",
      },
      {
        title: "Flow",
        description: "询问预算、需求和决策时机。",
      },
      {
        title: "Result",
        description: "更少的电话，更好的资格认定。",
      },
    ],
    bestFor: ["High price services", "Agencies", "Consultants"],
    collects: ["Budget", "Decision timeline", "Pain points", "Contact info"],
  },
  {
    name: "快速碳水化合物计算器",
    emoji: "🏃‍♂️",
    fileName: "quick-carb-calculator.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "Entertainment",
    features: [],
    summary:
      "一个碳水化合物计算器聊天机器人模板，快速给出补给指导。",
    description:
      "询问几个问题，然后分享简单的碳水化合物摄入量估算。聊天机器人让计算变得轻松快捷。非常适合运动或营养品牌。",
    highlights: [
      {
        title: "Goal",
        description: "提供快速、有用的计算。",
      },
      {
        title: "Flow",
        description: "收集基本信息，然后分享估算结果。",
      },
      {
        title: "Result",
        description: "用户能快速完成的有用工具。",
      },
    ],
    bestFor: ["Sports brands", "Coaches", "Health content"],
    collects: ["Weight", "Activity level", "Training duration"],
  },
  {
    name: "皮肤分型",
    emoji: "💆‍♀️",
    fileName: "skin-typology.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "E-commerce",
    features: ["AI-powered"],
    summary:
      "一个皮肤分型聊天机器人模板，根据回答推荐护肤方案。",
    description:
      "询问皮肤类型、问题和目标，然后给出个性化的推荐。聊天机器人像一次快速咨询。非常适合美容和护肤品牌。",
    highlights: [
      {
        title: "Goal",
        description: "将用户匹配到正确的护肤方案。",
      },
      {
        title: "Flow",
        description: "询问皮肤问题，然后推荐产品。",
      },
      {
        title: "Result",
        description: "更自信的购物者和更高的意图。",
      },
    ],
    bestFor: ["Skincare brands", "Beauty retailers", "Lead magnets"],
    collects: ["Skin type", "Concerns", "Routine goals"],
  },
  {
    name: "OpenAI助手聊天",
    emoji: "🤖",
    fileName: "openai-assistant-chat.json",
    updatedAt: templateUpdatedAt,
    useCase: "AI Chat",
    features: ["AI-powered"],
    summary:
      "一个OpenAI助手聊天机器人模板，专注于任务型AI对话。",
    description:
      "与您的 OpenAI 助手直接开始聊天。聊天机器人专注于快速任务和清晰回答。可将其用作构建更智能助手的基础。",
    highlights: [
      {
        title: "Goal",
        description: "快速构建专注的AI助手。",
      },
      {
        title: "Flow",
        description: "用户提问，助手以任务优先的方式回复。",
      },
      {
        title: "Result",
        description: "一个干净的AI工作流基础。",
      },
    ],
    bestFor: ["Internal tools", "AI assistants", "Prototypes"],
    collects: ["Task request"],
  },
  {
    name: "节省估算器",
    emoji: "💰",
    fileName: "savings-estimator.json",
    updatedAt: templateUpdatedAt,
    category: "marketing",
    useCase: "E-commerce",
    features: [],
    summary:
      "一个节省估算器聊天机器人模板，向用户展示他们可以节省多少。",
    description:
      "询问几个简短问题并计算简单的节省估算。聊天机器人以清晰的方式突出您产品的价值。非常适合电子商务或订阅产品。",
    highlights: [
      {
        title: "Goal",
        description: "通过快速估算展示价值。",
      },
      {
        title: "Flow",
        description: "收集使用数据，然后显示节省金额。",
      },
      {
        title: "Result",
        description: "更强的价值认知和购买意向。",
      },
    ],
    bestFor: ["E-commerce brands", "Subscription products", "Value pages"],
    collects: ["Current spend", "Usage frequency", "Contact info"],
  },
  {
    name: "电商客服",
    emoji: "🛒",
    fileName: "ecommerce-support.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    isNew: true,
    useCase: "Customer Support",
    features: [],
    summary:
      "一个电商网站客服聊天机器人模板，自动处理售前咨询、物流查询与退换货引导。",
    description:
      "在您的电商网站上放置一个 7×24 智能客服：自动回答商品咨询、查询物流、说明退换货政策，复杂问题一键转人工。大幅减少重复客服工作，让您不错过任何一笔潜在订单。",
    highlights: [
      {
        title: "Goal",
        description: "自动承接 80% 重复咨询，减少客服压力。",
      },
      {
        title: "Flow",
        description: "欢迎 → 选择咨询类型 → 分场景解答 → 转人工/留资。",
      },
      {
        title: "Result",
        description: "响应更快、线索不遗漏、复购率提升。",
      },
    ],
    bestFor: ["E-commerce stores", "DTC brands", "独立站卖家"],
    collects: ["咨询问题", "订单号", "联系方式"],
  },
  {
    name: "教育机构客服",
    emoji: "🎓",
    fileName: "education-support.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    isNew: true,
    useCase: "Customer Support",
    features: [],
    summary:
      "一个教育培训机构客服聊天机器人模板，承接课程咨询、报名引导与开课时间查询。",
    description:
      "培训机构官网放一个智能课程顾问：介绍课程方向、登记报名意向、告知排课时间，复杂问题转接人工顾问。让每一个潜在学员都能被及时跟进，提升报名转化。",
    highlights: [
      {
        title: "Goal",
        description: "把官网访客转化为可跟进的报名线索。",
      },
      {
        title: "Flow",
        description: "欢迎 → 课程/报名/排课 → 登记信息 → 人工跟进。",
      },
      {
        title: "Result",
        description: "报名意向零流失，顾问跟进更高效。",
      },
    ],
    bestFor: ["K12 培训机构", "职业教育", "成人技能培训"],
    collects: ["咨询课程", "报名信息", "联系方式"],
  },
  {
    name: "本地生活服务客服",
    emoji: "🏪",
    fileName: "local-services-support.json",
    updatedAt: templateUpdatedAt,
    category: "product",
    isNew: true,
    useCase: "Customer Support",
    features: [],
    summary:
      "一个本地生活服务客服聊天机器人模板，承接服务介绍、在线预约与到店指引。",
    description:
      "为本地门店（美容、健身、家政、维修等）配置智能前台：介绍服务、在线登记预约、告知地址与营业时间，复杂需求转人工。让顾客咨询不落空，到店更顺畅。",
    highlights: [
      {
        title: "Goal",
        description: "24 小时在线接单，预约不漏。",
      },
      {
        title: "Flow",
        description: "欢迎 → 服务/预约/到店指引 → 登记信息 → 人工确认。",
      },
      {
        title: "Result",
        description: "预约量提升、顾客体验更佳。",
      },
    ],
    bestFor: ["美容美发", "家政服务", "健身工作室", "维修上门"],
    collects: ["咨询内容", "预约信息", "联系方式"],
  },
] satisfies TemplateDefinition[];

export const useCases: TemplateUseCase[] = [
  "Lead Generation",
  "Customer Support",
  "AI Chat",
  "Quiz & Survey",
  "E-commerce",
  "Lead Magnets",
  "Onboarding",
  "Entertainment",
];

export const features: TemplateFeature[] = [
  "AI-powered",
  "Payment integration",
  "File upload",
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
