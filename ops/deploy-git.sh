#!/usr/bin/env bash
# Deploy from GitHub on the server:   ~/deploy-git.sh        (run as 'ubuntu')
# Needs: repo cloned at ~/app (read-only deploy key), .env at ~/app/server/.env
set -euo pipefail
APP="$HOME/app"
WEB=/var/www/socialnetworker

cd "$APP"
echo "==> git pull"
git fetch --prune origin
git reset --hard origin/main

echo "==> backend"
cd "$APP/server"
npm ci --omit=dev
if pm2 describe socialnetworker-api >/dev/null 2>&1; then pm2 reload socialnetworker-api --update-env
else pm2 start "$APP/server/ecosystem.config.cjs" && pm2 save; fi

echo "==> frontend build"
cd "$APP/client"
npm ci
npm run build
sudo rsync -a --delete dist/ "$WEB"/
sudo chown -R www-data:www-data "$WEB"

sleep 3
curl -fsS http://127.0.0.1:5000/api/health && echo
echo "Deployed $(git -C "$APP" rev-parse --short HEAD)"
