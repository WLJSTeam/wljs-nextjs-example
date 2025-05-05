import 'wljs-notebook-react/styles.css'

// pages/_app.tsx

import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;