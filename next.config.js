/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
        {
            source: '/',
            destination: '/dashboard'
        }
    ];
},
}

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.slingacademy.com',
            port: '',
            pathname: '/public/sample-photos/**',
          },
        ],
      },
    ...nextConfig
}
