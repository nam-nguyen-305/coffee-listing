import AutoImport from "unplugin-auto-import/webpack";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      AutoImport({
        imports: ["react"],
        // Tự động import các components của React
        dirs: ["./src/components/ui"], // Quét thư mục components/ui để import tự động
        dts: true, // Tạo file khai báo tự động cho TypeScript
      })
    );
    return config;
  },
};

export default nextConfig;
