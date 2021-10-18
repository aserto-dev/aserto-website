import 'css/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import initGsap from 'lib/gsap'
import { IdProvider } from '@radix-ui/react-id'
import '@typeform/embed/build/css/popup.css'
import { useEffect } from 'react'
import { pageview } from 'lib/ga'

initGsap()

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <IdProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </IdProvider>
  )
}

export default App
