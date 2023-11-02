/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ecommerce-product-list-page",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
