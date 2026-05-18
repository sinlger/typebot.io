import { TypebotLogo } from "@/components/TypebotLogo";
import abhayPictureSrc from "./assets/abhay.jpeg";
import invictuzPictureSrc from "./assets/invictuz.png";
import joshuaPictureSrc from "./assets/joshua.jpg";
import julienPictureSrc from "./assets/julien.jpeg";
import kurniaPictureSrc from "./assets/kurnia.jpeg";
import laszloPictureSrc from "./assets/laszlo.jpeg";
import lucasPictureSrc from "./assets/lucas.png";
import nicolaiPictureSrc from "./assets/nicolai.jpg";
import oscarPictureSrc from "./assets/oscar.jpeg";
import stevePictureSrc from "./assets/steve.jpg";
import theoPictureSrc from "./assets/theo.jpeg";

const testimonials = [
  {
    name: "章**",
    provider: "email",
    avatarSrc: stevePictureSrc,
    role: "首席执行官",
    content: (
      <>
        去年 12 月，我们为 Stillio 的所有新注册用户做了自己的引导模板，效果非常棒且稳定可靠。
        <br />
        <br />
        我们把收集的数据发送到 Encharge 和 Pipedrive（CRM）。
        <br />
        <br />
        现在我们正在根据 Typebot 中的回答（用户行业与角色）来个性化邮件模板。我们是忠实粉丝！
      </>
    ),
  },
  {
    name: "民**",
    role: "总经理",
    provider: "email",
    content: (
      <>
        我在公司使用 Typebot，惊讶地发现它把客服工作量减少了一半。我几分钟内就搭建出了一个完全可用的聊天机器人。
        <br />
        <br />
        你可以创建一个机器人来回答业务中常见问题，或创建一个机器人帮助你在社交媒体或其他平台上推广业务。
      </>
    ),
  },
  {
    name: "可**",
    role: "创始人",
    provider: "email",
    avatarSrc: kurniaPictureSrc,
    content: (
      <>
        我用过好几个聊天机器人构建器，但 Typebot 是我用得最多的。搭建简单直观。
        <br />
        与第三方应用集成也很轻松，而且你可以用它的简洁性打造最复杂的机器人。
      </>
    ),
  },
  {
    name: "陈**",
    role: "数字营销专家",
    provider: "email",
    avatarSrc: laszloPictureSrc,
    content: (
      <>
        Typebot 是最棒的聊天机器人构建器之一：智能功能 + 拖拽式搭建，让一切变得简单。它的 UI/UX 简直像人间天堂……
        <br />
        更重要的是背后的人。他能保证平台长期稳定迭代。
      </>
    ),
  },
  {
    name: "欧*",
    role: "首席执行官",
    provider: "capterra",
    avatarSrc: oscarPictureSrc,
    content:
      "注册后 5 分钟内，你就能借助自带模板让机器人跑起来。我用过很多做机器人的工具，但没有一个像 Typebot 这样简单、易用又强大。",
  },
  {
    name: "米**",
    role: "增长经理",
    avatarSrc: julienPictureSrc,
    provider: "email",
    content:
      "我们全年都在含有 Typebot 的落地页上投放 Google 广告。与旧的 WordPress 表单相比，我们的对话转化率提升了 2 倍。",
  },
  {
    name: "刘*",
    role: "增长策略师",
    avatarSrc: joshuaPictureSrc,
    provider: "email",
    content:
      "我把 Typeform 升级为 Typebot，在营销活动中的转化率从 14% 提升到 43%。第一天就能感觉到提升，彻底改变了游戏规则。",
  },
  {
    name: "波**",
    role: "客户服务经理",
    provider: "email",
    content: (
      <>
        多亏了 Typebot，我终于可以把网站表单做得更现代，并收集到以前会遗漏的信息。另外也要感谢 Baptiste：服务一直在进化，支持非常到位，
        不仅帮忙解决问题，还会倾听建议并落地。
        <br />
        <br />
        谢谢、谢谢、再谢谢。
      </>
    ),
  },
  {
    name: "Marechal*",
    provider: "productHunt",
    avatarSrc: theoPictureSrc,
    role: "无代码专家 / 内容创作者",
    content: (
      <>
        太棒的产品！只要涉及和客户对话，我几乎什么都用 Typebot。
        <br />
        <br />
        Typebot 最厉害的是，它能轻松做出“聊天界面”的感觉，而你不用整天守在电脑前回复客户。强烈推荐！
      </>
    ),
  },
  {
    name: "果**",
    role: "EcommerceNotebook.com 首席执行官",
    avatarSrc: nicolaiPictureSrc,
    provider: "email",
    content:
      "我真的很喜欢用 Typebot！太棒了。我用过所有顶级机器人产品，你们的确是最易用的，同时依然非常强大。",
  },
  {
    name: "Alpha*",
    provider: "email",
    avatarSrc: lucasPictureSrc,
    role: "Barp Digital 创始人",
    content:
      "你的成果令人难以置信，能让很多人的生活更轻松。",
  },
  {
    name: "T*",
    role: "首席技术官",
    provider: "capterra",
    content:
      "做得很好。开发者会迅速响应并做出改动，这非常罕见。我们提了一个改进建议，两天内就实现了。太惊艳了！祝你好运，也非常感谢。",
  },
  {
    name: "Invictuz*",
    provider: "reddit",
    avatarSrc: invictuzPictureSrc,
    content:
      "这是我见过并体验过最炸裂的开源项目。使用场景又酷又现代，我不敢相信上手竟然这么容易。功能丰富、打磨精致，感觉就像成熟产品。难以置信这是一个人做出来的。比我看过那些大公司聊天机器人构建器的演示还要好。我准备去学 TypeScript，以后也想贡献代码。太震撼了……",
  },
  {
    name: "Kulkarni*",
    provider: "productHunt",
    avatarSrc: abhayPictureSrc,
    role: "Webisharp 创始人",
    content:
      "过去两小时一直在用这个工具，做出了一个完整的线索收集机器人。目前体验很不错。@baptiste_arnaud 祝你以后一切顺利 :)",
  },
];

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 max-w-3xl items-center w-full">
      <div className="flex flex-col gap-4 md:text-center">
        <h2>用户这样评价 Typebot</h2>
        <p>团队更高效，客户更满意，品牌更突出。</p>
      </div>
      <div className="flex flex-col rounded-2xl overflow-y-auto max-h-[50vh] md:max-h-[70vh] bg-white border relative isolate w-full">
        <div
          className="pointer-events-none top-0 h-10 w-full bg-linear-to-t from-background/10 to-background/90 sticky shrink-0 animate-in fade-in"
          style={{
            animationTimeline: "scroll()",
            animationRange: "0% 10%",
          }}
        />
        <div className="flex flex-col gap-6 items-center px-4">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div
          className="pointer-events-none bottom-0 h-10 w-full bg-linear-to-b from-background/10 to-background/90 sticky shrink-0 animate-out fade-out"
          style={{
            animationTimeline: "scroll()",
            animationRange: "90% 100%",
          }}
        />
      </div>
    </div>
  );
};

const Testimonial = ({
  name,
  content,
  role,
  avatarSrc,
}: (typeof testimonials)[number]) => {
  return (
    <div className="flex gap-2 max-w-lg">
      <div className="rounded-full size-10 shrink-0">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="object-cover rounded-full"
          />
        ) : (
          <div className="dark rounded-full size-full flex items-center justify-center p-3">
            <TypebotLogo />
          </div>
        )}
      </div>
      <div className="flex flex-col bg-secondary text-secondary-foreground border p-4 rounded-xl gap-4 rounded-tl-md">
        <p>{content}</p>
        <hr />
        <span className="text-sm">
          {name} - {role}
        </span>
      </div>
    </div>
  );
};
