import type { AppProps } from 'next/app';
import "@styles/main.scss";
import "@fontsource/poppins";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
