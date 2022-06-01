export const pageview = (url: string) => {
  //@ts-ignore
  sendEvent('page_view', {
    page_path: url
  })
}

// log specific events happening.
export const sendEvent = ({ action, params }: any) => {
  //@ts-ignore
  window.gtag('event', action, params)
}
