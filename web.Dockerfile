# --- Web image: build the React app, then serve it with Caddy (automatic HTTPS + reverse proxy to the API) ---
FROM node:22-alpine AS build
WORKDIR /client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
# VITE_API_URL stays empty on purpose: the browser calls the same origin (/api)
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /client/dist /srv
COPY ops/Caddyfile /etc/caddy/Caddyfile
