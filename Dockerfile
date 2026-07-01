FROM node:20-alpine AS build
WORKDIR /app
ENV NPM_CONFIG_LEGACY_PEER_DEPS=true

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --build-optimizer --vendor-chunk=false --output-path=dist/ALET_WEBSITE/browser

FROM nginx:1.26-alpine
RUN rm /etc/nginx/conf.d/default.conf && \
    addgroup -g 101 -S nginx || true && \
    adduser -u 101 -D -S -G nginx nginx || true && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist/ALET_WEBSITE/browser /usr/share/nginx/html

USER nginx
EXPOSE 8080

