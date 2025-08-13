// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

// next.config.mjs
import { withAmplifyHosting } from '@aws-amplify/adapter-nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withAmplifyHosting(nextConfig);
