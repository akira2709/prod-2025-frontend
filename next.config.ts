import type { NextConfig } from "next";
import WorkboxPlugin from "workbox-webpack-plugin";

const nextConfig: NextConfig = {
  webpack(config) {
    // Добавляем плагин Workbox для генерации service worker
    config.plugins = [
      ...(config.plugins || []),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true, // Service worker сразу берет управление над страницей
        skipWaiting: true, // Обновляет service worker без ожидания закрытия всех вкладок
        runtimeCaching: [
          {
            urlPattern: /^https?.*/, // Кэширует все HTTPS-запросы
            handler: "NetworkFirst", // Сначала пытается получить данные из сети, затем из кэша
            options: {
              cacheName: "offlineCache", // Название кэша
              expiration: {
                maxEntries: 20, // Максимальное количество записей в кэше
              },
            },
          },
        ],
      }),
    ];
    return config;
  },
};

export default nextConfig;
