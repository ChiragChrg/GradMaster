/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';

const withPWA = nextPWA({
    dest: 'public',
    register: true,
    disable: process.env.NODE_ENV === "development"
})

const nextConfig = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "gravatar.com",
            },
        ],
    }
})

export default nextConfig;
