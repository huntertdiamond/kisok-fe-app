/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "wrpcd.net",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "i.imgur.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "imagedelivery.net",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "images.mirror-media.xyz",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "remote-image.decentralized-content.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "dd.dexscreener.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "www.enjoy.tech",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "yoink.terminally.online",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "github.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "i.seadn.io",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "kiosk.app",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "peach-changing-limpet-80.mypinata.cloud",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "zora.co",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "supercast.mypinata.cloud",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "ipfs.decentralized-content.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "warpcast.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "paragraph-nextjs-gvgnssb5c.paragraph.xyz",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "img.reservoir.tools",
          port: "",
          pathname: "**",
        },
  
        {
          protocol: "https",
          hostname: "gobase.wtf",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "cloudflare-ipfs.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "cloudfront-us-east-1.images.arcpublishing.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "static.vecteezy.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "www.the-sun.com",
          port: "",
          pathname: "**",
        },
        {
          protocol: "https",
          hostname: "i.pinimg.com",
          port: "",
          pathname: "**",
        },
      ],
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "graphql-tag/loader",
          },
        ],
      });
  
      return config;
    },
    experimental: {
        optimizePackageImports: ["recharts", 'lucide-react']

    }
  };
  
  export default nextConfig;
  