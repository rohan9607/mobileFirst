/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        API_URL: process.env.API_URL || 'http://localhost:5555'
    },
    typescript: {
        ignoreBuildErrors: false,
      },
      eslint: {
        ignoreDuringBuilds: false,
      },
      reactStrictMode: true,
      swcMinify: true, 
      async headers() {
        return [
          {
            source: '/(.*)',
            headers: [ 
              {
                key: 'X-DNS-Prefetch-Control',
                value: 'on',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
              },
              {
                key: 'Server',
                value: 'Apache', // phony server value
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'X-Frame-Options',
                value: 'sameorigin',
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block',
              },
              {
                key: 'Referrer-Policy',
                value: 'same-origin',
              },
              {
                key: 'Permissions-Policy',
                value: 'geolocation=*', // allow specified policies here
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
