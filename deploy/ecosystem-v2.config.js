const fs = require("fs");

function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  fs.readFileSync(file, "utf8").split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (!line || line.startsWith("#")) return;
    const eq = line.indexOf("=");
    if (eq < 0) return;
    const k = line.slice(0, eq).trim();
    let v = line.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
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
      env: { PORT: "3002", WORKFLOWS_SERVER_PORT: "3002" },
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
