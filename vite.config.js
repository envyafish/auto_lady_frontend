import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";


const {VITE_MODE} = process.env;
export default defineConfig({

    plugins: [react(),
        VitePWA({
            mode: VITE_MODE,
            base: '/',
            manifest: {
                name: 'AutoLady',
                short_name: 'AutoLady',
                description: 'AutoLady',
                theme_color: "#000000",
                icons: [
                    //添加图标， 注意路径和图像像素正确
                    {
                        src: '/logo.jpg',
                        sizes: '1024x1024',
                        type: 'image/png',
                    },
                ],
            },
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}'], //缓存相关静态资源
                runtimeCaching: [
                    // 配置自定义运行时缓存
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'image-cache',
                            expiration: {
                                // 最多30个图
                                maxEntries: 30,
                            },
                        },
                    },
                    {
                        urlPattern: /.*\.js.*/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'js-cache',
                            expiration: {
                                maxEntries: 30, // 最多缓存30个，超过的按照LRU原则删除
                                maxAgeSeconds: 30 * 24 * 60 * 60,
                            },
                            cacheableResponse: {
                                statuses: [200],
                            },
                        },
                    },
                    {
                        urlPattern: /.*\.css.*/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'css-cache',
                            expiration: {
                                maxEntries: 20,
                                maxAgeSeconds: 30 * 24 * 60 * 60,
                            },
                            cacheableResponse: {
                                statuses: [200],
                            },
                        },
                    },
                    {
                        urlPattern: /.*\.html.*/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'html-cache',
                            expiration: {
                                maxEntries: 20,
                                maxAgeSeconds: 30 * 24 * 60 * 60,
                            },
                            cacheableResponse: {
                                statuses: [200],
                            },
                        },
                    },
                ]
            },
            // devOptions: {
            //     enabled: true,
            // }
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', // 后端服务器地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
