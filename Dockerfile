FROM node:latest AS builder

WORKDIR /app
COPY package.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:latest
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
CMD ["bun", "run", "start"]
EXPOSE 80
