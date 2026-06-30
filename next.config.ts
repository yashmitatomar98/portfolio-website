import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a parent-level package-lock.json
  // otherwise makes Next.js infer the wrong root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
