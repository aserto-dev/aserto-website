import 'css/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import initGsap from 'lib/gsap'
import { IdProvider } from '@radix-ui/react-id'

initGsap()

const App = ({ Component, pageProps, router }: AppProps) => (
  <IdProvider>
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  </IdProvider>
)

export default App
