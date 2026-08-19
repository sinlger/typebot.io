import { createEmailMagicLink } from "@typebot.io/auth/helpers/createEmailMagicLink";
import { Badge } from "@typebot.io/ui/components/Badge";
import { Button } from "@typebot.io/ui/components/Button";
import { useQueryState } from "nuqs";
import { Seo } from "@/components/Seo";
import { toast } from "@/lib/toast";

export const EmailRedirectPage = () => {
  const [redirectPath] = useQueryState("redirectPath");
  const [email] = useQueryState("email");
  const [token] = useQueryState("token");

  const redirectToMagicLink = () => {
    if (!token || !email) {
      toast({ description: "缺少 token 或 email 查询参数" });
      return;
    }
    window.location.assign(
      createEmailMagicLink(token, email, redirectPath ?? undefined),
    );
  };

  if (!email || !token) return null;

  return (
    <div className="flex flex-col items-center gap-2 h-screen justify-center">
      <Seo title={"邮箱认证确认"} />
      <div className="flex flex-col p-10 rounded-8 border gap-6 bg-gray-1">
        <div className="flex flex-col gap-4">
          <h2>邮箱认证</h2>
          <p>
            您即将以 <Badge>{email}</Badge> 登录
          </p>
        </div>
        <Button onClick={redirectToMagicLink}>继续</Button>
      </div>
    </div>
  );
};
