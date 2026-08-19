"use client";

import { Button } from "@typebot.io/ui/components/Button";
import { useState, useTransition } from "react";
import { orpcClient } from "@/lib/queryClient";

type Props = {
  email?: string;
  token?: string;
  isValid: boolean;
};

type Status =
  | "confirm"
  | "unsubscribed"
  | "unsubscribe-failed"
  | "resubscribed"
  | "already-subscribed"
  | "blocked"
  | "unknown"
  | "invalid";

export const UnsubscribePageClient = ({ email, token, isValid }: Props) => {
  const [status, setStatus] = useState<Status>(isValid ? "confirm" : "invalid");
  const [isPending, startTransition] = useTransition();

  const handleUnsubscribe = () => {
    if (!email || !token) return setStatus("invalid");
    startTransition(() => {
      void triggerUnsubscribe(email, token, setStatus);
    });
  };

  const handleResubscribe = () => {
    if (!email || !token) return setStatus("invalid");
    startTransition(() => {
      void triggerResubscribe(email, token, setStatus);
    });
  };

  const { message, helperText } = getCopy(status);
  const showUnsubscribe = status === "confirm";
  const showResubscribe = status === "unsubscribed";

  return (
    <main className="flex flex-col gap-4 h-dvh justify-center items-center text-gray-12 px-8 py-8">
      <div className="w-full max-w-lg">
        <div className="flex flex-col p-8 rounded-lg gap-6 bg-gray-1">
          <div className="flex flex-col gap-3">
            <h1 className="text-base font-semibold text-balance">
              邮件偏好设置
            </h1>
            <p className="text-sm leading-relaxed text-pretty">{message}</p>
            {helperText ? (
              <p className="text-sm leading-relaxed text-gray-11 text-pretty">
                {helperText}
              </p>
            ) : null}
          </div>
          {showUnsubscribe ? (
            <Button
              onClick={handleUnsubscribe}
              disabled={isPending}
              className="self-start"
            >
              取消订阅
            </Button>
          ) : null}
          {showResubscribe ? (
            <Button
              onClick={handleResubscribe}
              disabled={isPending}
              className="self-start"
            >
              重新订阅
            </Button>
          ) : null}
        </div>
      </div>
    </main>
  );
};

const triggerUnsubscribe = async (
  email: string,
  token: string,
  setStatus: (status: Status) => void,
) => {
  try {
    await orpcClient.emails.unsubscribe({
      query: { email, token },
    });
    setStatus("unsubscribed");
  } catch {
    setStatus("unsubscribe-failed");
  }
};

const triggerResubscribe = async (
  email: string,
  token: string,
  setStatus: (status: Status) => void,
) => {
  try {
    const response = await orpcClient.emails.resubscribe({
      query: { email, token },
    });
    setStatus(response.status);
  } catch {
    setStatus("unknown");
  }
};

const getCopy = (status: Status) => {
  if (status === "invalid") return { message: "该退订链接无效。" };
  if (status === "confirm")
    return {
      message: "确认退订？",
      helperText: "点击下方按钮以停止接收这些邮件。",
    };
  if (status === "unsubscribed")
    return {
      message: "已成功退订。",
      helperText: "您将在 48 小时内停止接收这些邮件。",
    };
  if (status === "resubscribed")
    return {
      message: "您已重新订阅。",
      helperText: "邮件恢复可能需要最多 48 小时。",
    };
  if (status === "blocked")
    return {
      message: "无法重新订阅此邮箱。",
      helperText: "该地址曾多次退信，因此已禁用重新订阅。",
    };
  if (status === "already-subscribed")
    return {
      message: "您已处于订阅状态。",
    };
  return {
    message: "无法更新您的邮件偏好设置。",
  };
};
