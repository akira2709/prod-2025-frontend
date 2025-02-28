FROM oven/bun:latest AS builder

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build
FROM oven/bun:alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/bun.lockb ./bun.lockb
COPY --from=builder /app/package.json ./package.json
CMD ["bun", "run", "start"]
EXPOSE 80
