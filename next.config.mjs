/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.csrvoice.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/news.html",
        destination: "/category/news",
        permanent: true,
      },
      {
        source: "/social-stocks.html",
        destination: "/category/social-stocks",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/sectors/tech-and-innovation.html",
        destination: "/category/tech-and-innovation",
        permanent: true,
      },
      {
        source: "/videos.html",
        destination: "/410",
        permanent: true,
      },
      {
        source: "/sectors/:slug.html",
        destination: "/category/:slug",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
