#!/usr/bin/env bash
# Update the running Docker stack from GitHub:  ~/app/ops/docker-deploy.sh
set -euo pipefail
cd "$HOME/app"
git fetch --prune origin && git reset --hard origin/main
docker compose up -d --build --remove-orphans
docker image prune -f >/dev/null
sleep 8
docker compose ps
curl -fsS http://127.0.0.1/api/health -H "Host: localhost" >/dev/null 2>&1 || docker compose exec -T api node -e "fetch('http://127.0.0.1:5000/api/health').then(r=>r.text()).then(console.log)"
echo "Deployed $(git rev-parse --short HEAD)"
