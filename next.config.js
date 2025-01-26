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
      "default-src 'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com; img-src 'self' data:; font-src 'self' data: fonts.gstatic.com; connect-src 'self' fonts.gstatic.com vitals.vercel-insights.com",
  },
];

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'mirrors.creativecommons.org',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
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
};
