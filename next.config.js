/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'img.vietqr.io',
            port: '',
            pathname: '/**',
        }, ],
    },
};

module.exports = nextConfig;