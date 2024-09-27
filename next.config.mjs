/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', //实现部分预渲染
    },
};

export default nextConfig;
