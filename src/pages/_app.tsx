import 'css/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import initGsap from 'lib/gsap'

initGsap()

const App = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} key={router.route} />
  </AnimatePresence>
)

export default App
