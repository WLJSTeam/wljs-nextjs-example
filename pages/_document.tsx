import { Html, Head, Main, NextScript } from 'next/document'

import {HeaderScripts, HeaderStyles} from 'wljs-notebook-react/head.js'

import Script from 'next/script'




export function MakeHeaderScripts () {
    return HeaderScripts.map((script, index) => (
        <Script
          key={index}
          {...script.attributes}
        />
      ));
}

export function MakeHeaderStyles () {
    return HeaderStyles.map((style, index) => (
        <link
          rel='stylesheet'
          href={style.attributes.href}
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