/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos', pathname: '/**' }],
  },
};



import { withAmplifyHosting } from '@aws-amplify/adapter-nextjs';
 
export default withAmplifyHosting(nextConfig);