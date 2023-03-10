/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_SOCKET_URL: "http://localhost:3001",
        NEXT_PUBLIC_API_URL: "https://hs-gartic-clone.netlify.app/",
    },
};

module.exports = nextConfig;
