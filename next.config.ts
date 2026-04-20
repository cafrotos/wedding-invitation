import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.vietqr.io",
        pathname: "/image/**",
      },
    ],
    qualities: [60],
  },
  // Turbopack đang là default trong Next.js 16
  // Không cần config alias vì tsconfig.json "paths" {"@/*": ["./src/*"]} 
  // đã được Turbopack đọc tự động
  turbopack: {},
};

export default nextConfig;
