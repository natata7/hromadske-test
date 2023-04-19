import { AppProps } from 'next/app'
import '../styles/index.css'

export function reportWebVitals(metric: any) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
