import { Html, Head, Main, NextScript } from 'next/document'

import {HeaderScripts} from 'wljs-notebook-react/head.js'

import Script from 'next/script'


export function MakeHeaderScripts () {
    return HeaderScripts.map((script, index) => (
        <Script
          key={index}
          {...script.attributes}
        />
      ));
}

export default function Document() {
 
    return (
      <Html>
        <Head>
          {MakeHeaderScripts()}
        </Head>
        <body className="bg-white text-gray-800 font-sans leading-relaxed px-6">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }