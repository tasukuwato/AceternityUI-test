/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { //ps unsplashという外部ホストを設定して、parallaxでインポートする。
        domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
