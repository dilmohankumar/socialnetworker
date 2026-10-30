#!/usr/bin/env bash
# One-time server hardening + runtime install for a fresh Ubuntu 24.04 EC2 (run as the default 'ubuntu' user).
set -euo pipefail

echo "==> swap (1 GB RAM instances need it for npm install)"
if ! swapon --show | grep -q /swapfile; then
  sudo fallocate -l 1G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile
  grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab >/dev/null
fi

echo "==> packages + security updates"
sudo apt-get update -y
sudo DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y nginx unzip certbot python3-certbot-nginx ufw fail2ban unattended-upgrades curl

echo "==> automatic security patches"
echo 'APT::Periodic::Update-Package-Lists "1"; APT::Periodic::Unattended-Upgrade "1";' | sudo tee /etc/apt/apt.conf.d/20auto-upgrades >/dev/null

echo "==> Node.js 22 + PM2"
if ! command -v node >/dev/null || [[ "$(node -v)" != v22* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi
sudo npm install -g pm2
pm2 install pm2-logrotate >/dev/null
pm2 set pm2-logrotate:max_size 10M >/dev/null
pm2 set pm2-logrotate:retain 7 >/dev/null

echo "==> firewall (SSH + web only)"
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "==> SSH: keys only, no root login"
sudo tee /etc/ssh/sshd_config.d/99-hardening.conf >/dev/null <<'CONF'
PasswordAuthentication no
PermitRootLogin no
CONF
sudo systemctl reload ssh

echo "==> fail2ban (blocks brute-force logins)"
sudo systemctl enable --now fail2ban

echo "==> app directories"
mkdir -p "$HOME/socialnetworker-api"
sudo mkdir -p /var/www/socialnetworker
sudo chown -R www-data:www-data /var/www/socialnetworker

echo "Done. Node: $(node -v)  PM2: $(pm2 -v)  Nginx: $(nginx -v 2>&1)"
