import { Html, Head, Main, NextScript } from 'next/document'

import {HeaderScripts, HeaderStyles} from 'wljs-notebook-react/head.js'

import Script from 'next/script'

const withAssetPrefix = (href: string) => {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

  // Don’t touch absolute URLs
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//')
  ) {
    return href;
  }

  if (!prefix) return href;

  // Avoid double-prefixing
  if (href.startsWith(prefix)) return href;

  if (href.startsWith('/')) {
    return `${prefix}${href}`;
  }
  return `${prefix}/${href}`;
};



export function MakeHeaderScripts() {
  return HeaderScripts.map((script, index) => (
    <Script
      key={index}
      {...script.attributes}
      // If you want to be extra safe for scripts too:
      src={withAssetPrefix(script.attributes.src)}
    />
  ));
}

export function MakeHeaderStyles() {
  return HeaderStyles.map((style, index) => (
    <link
      key={index}
      rel="stylesheet"
      href={withAssetPrefix(style.attributes.href)}
    />
  ));
}

export default function Document() {
 
    return (
      <Html>
        <Head>
          {MakeHeaderStyles()}
          {MakeHeaderScripts()}
        </Head>
        <body className="bg-white text-gray-800 px-6">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }