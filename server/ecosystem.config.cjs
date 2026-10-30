// PM2 process file (cwd = this folder). Secrets live in server/.env (loaded by dotenv), not here.
module.exports = {
  apps: [
    {
      name: 'socialnetworker-api',
      script: 'src/server.js',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      max_memory_restart: '300M',
      env: { NODE_ENV: 'production', PORT: 5000 },
    },
  ],
};
