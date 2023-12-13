import 'css/global.css'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import initGsap from 'lib/gsap'
import '@typeform/embed/build/css/popup.css'
import React, { useEffect } from 'react'
import { pageview } from 'lib/ga'
import { PlaygroundBannerContextProvider } from 'components/sections/common/banners/playground/PlaygroundBannerContext'
import { useTrackingCode } from 'react-hubspot-tracking-code-hook'
import { useReportHubspotFormEventsToGoogleAnalytics } from 'lib/hubspot/Hubspot2Ga'
import '../css/carousel.css'
import '../css/code-carousel.css'
import '../css/contactform.css'

initGsap()
const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // update Hubspot page tracking
  const { setPathPageView } = useTrackingCode()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
      setPathPageView(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, setPathPageView])

  useReportHubspotFormEventsToGoogleAnalytics()

  return (
    <AnimatePresence exitBeforeEnter>
      <PlaygroundBannerContextProvider>
        <Component {...pageProps} key={router.route} />
      </PlaygroundBannerContextProvider>
    </AnimatePresence>
  )
}

export default App
