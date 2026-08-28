const fs = require("node:fs");

// 从 /opt/typebot.env 读取生产环境变量注入所有进程
function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  fs.readFileSync(file, "utf8")
    .split(/\r?\n/)
    .forEach((raw) => {
      const line = raw.trim();
      if (!line || line.startsWith("#")) return;
      const eq = line.indexOf("=");
      if (eq < 0) return;
      const k = line.slice(0, eq).trim();
      let v = line.slice(eq + 1).trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      out[k] = v;
    });
  return out;
}

const sharedEnv = loadEnv("/opt/typebot.env");

module.exports = {
  apps: [
    {
      name: "typebot-builder",
      cwd: "/opt/typebot-builder",
      script: "apps/builder/server.js",
      interpreter: "/usr/bin/node",
      max_memory_restart: "500M",
      env: { ...sharedEnv, HOSTNAME: "0.0.0.0", PORT: 3000 },
    },
    {
      name: "typebot-viewer",
      cwd: "/opt/typebot-viewer",
      script: "apps/viewer/server.js",
      interpreter: "/usr/bin/node",
      max_memory_restart: "400M",
      env: { ...sharedEnv, HOSTNAME: "0.0.0.0", PORT: 3001 },
    },
    {
      name: "typebot-workflows",
      cwd: "/opt/typebot-workflows",
      script: "/opt/typebot-workflows/start.sh",
      interpreter: "none",
      max_memory_restart: "400M",
      // 关键修复：workflows 也注入完整 sharedEnv（ENCRYPTION_SECRET / WORKFLOWS_DATABASE_URL / WORKFLOWS_RPC_SECRET 等）
      // 端口分离修复：effect cluster 的 runnerAddress 端口跟随 PORT 环境变量（不是 WORKFLOWS_SERVER_PORT）。
      //   若 PORT 与 HTTP 端口(3002)相同，cluster 会尝试绑定 localhost:3002 与 HTTP 的 0.0.0.0:3002 冲突
      //   （Linux 下 EADDRINUSE，报 "Failed to listen at localhost"）→ 必须让 PORT 用独立端口 34431。
      env: { ...sharedEnv, PORT: "34431", WORKFLOWS_SERVER_PORT: "3002" },
    },
    {
      name: "typebot-partykit",
      cwd: "/opt/typebot-partykit",
      script: "/root/.bun/bin/bunx",
      args: "partykit dev --port 1999 --config partykit.json",
      interpreter: "none",
      max_memory_restart: "300M",
      env: { ...sharedEnv },
    },
  ],
};
