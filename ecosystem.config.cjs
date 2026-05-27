module.exports = {
  apps: [
    {
      name: 'typebot-builder',
      cwd: '/opt/typebot/apps/builder/.next/standalone',
      script: 'apps/builder/server.js',
      env: {
        NODE_OPTIONS: '--no-node-snapshot',
        PORT: 3001,
        HOSTNAME: '0.0.0.0',
      },
    },
    {
      name: 'typebot-viewer',
      cwd: '/opt/typebot/apps/viewer/.next/standalone',
      script: 'apps/viewer/server.js',
      env: {
        NODE_OPTIONS: '--no-node-snapshot',
        PORT: 3002,
        HOSTNAME: '0.0.0.0',
      },
    },
    {
      name: 'typebot-workflows',
      cwd: '/opt/typebot/apps/workflows/dist',
      script: 'index.js',
      interpreter: '/root/.bun/bin/bun',
      env: {
        PORT: 3004,
        HOSTNAME: '0.0.0.0',
      },
    },
    {
      name: 'typebot-landing',
      cwd: '/opt/typebot/apps/landing-page-v2/.output',
      script: 'server/index.mjs',
      env: {
        PORT: 3003,
        HOST: '0.0.0.0',
      },
    },
  ],
};
