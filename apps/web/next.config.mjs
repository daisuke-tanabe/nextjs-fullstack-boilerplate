import { join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: join(import.meta.dirname, '../../'),
  },
};

export default nextConfig;
