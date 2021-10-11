const withPWA = require('next-pwa')

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com; img-src 'self' data:; font-src 'self' fonts.gstatic.com; connect-src 'self' vitals.vercel-insights.com",
  },
];

module.exports = withPWA({
  webpack5: true,
  images: {
    domains: ["mirrors.creativecommons.org"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
});
