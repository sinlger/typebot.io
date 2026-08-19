module.exports = {
  apps: [
    {
      name: "typebot-builder",
      cwd: "/opt/typebot-builder",
      script: "apps/builder/server.js",
      interpreter: "/usr/bin/node",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--no-node-snapshot",
        HOSTNAME: "0.0.0.0",
        PORT: 3000,
      },
      max_memory_restart: "800M",
    },
    {
      name: "typebot-viewer",
      cwd: "/opt/typebot-viewer",
      script: "apps/viewer/server.js",
      interpreter: "/usr/bin/node",
      env: {
        NODE_ENV: "production",
        NODE_OPTIONS: "--no-node-snapshot",
        HOSTNAME: "0.0.0.0",
        PORT: 3001,
      },
      max_memory_restart: "400M",
    },
    {
      name: "typebot-workflows",
      cwd: "/opt/typebot-workflows",
      script: "index.js",
      interpreter: "/root/.bun/bin/bun",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        WORKFLOWS_SERVER_PORT: 3002,
      },
      max_memory_restart: "400M",
    },
    {
      name: "typebot-partykit",
      cwd: "/opt/typebot-partykit",
      script: "/root/.bun/bin/bunx",
      args: "partykit dev --port 1999 --config partykit.json",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "300M",
    },
  ],
};
