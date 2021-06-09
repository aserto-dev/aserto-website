export const pageview = (url: string) => {
  //@ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GA_CODE, {
    page_path: url
  })
}

// log specific events happening.
export const sendEvent = ({ action, params }: any) => {
  //@ts-ignore
  window.gtag('event', action, params)
}
