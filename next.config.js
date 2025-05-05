const path = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        require('wljs-notebook-react/remark.js'),
        {
          fromDir: path.resolve(__dirname, 'pages'),      // Where MDX files live
          publicDir: path.resolve(__dirname, 'public'),       // Where to copy files
        },
      ],
    ],
  },
});
 


const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  ...(isExport && {
    output: 'export',
    basePath: '/wljs-nextjs-example',
    assetPrefix: '/wljs-nextjs-example',
  }),
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = withMDX(nextConfig);
