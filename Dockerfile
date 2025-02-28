FROM oven/bun:latest AS builder
WORKDIR /app


COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM builder AS release
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /app/bun.lockb ./bun.lockb
COPY --from=builder /app/package.json ./package.json

USER bun
EXPOSE 443
CMD ["bun", "run", "start", "-p", "443", "-H", "0.0.0.0"]
