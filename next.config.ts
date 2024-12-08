import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:['s3-alpha-sig.figma.com']
  }
   eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
