/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.yoursurveys.xyz',
            port: '',
            pathname: '/images/**',
          },
        ],
      },
}
