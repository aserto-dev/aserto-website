import 'css/global.css'
import { AppProps } from 'next/app'
import initGsap from 'lib/gsap'

initGsap()

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
)

export default App
