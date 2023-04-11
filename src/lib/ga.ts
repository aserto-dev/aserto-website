export const pageview = (url: string) => {
  //@ts-ignore
  sendEvent('page_view', {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    page_path: url
  })
}

// log specific events happening.
export const sendEvent = ({ action, params }: any) => {
  //@ts-ignore
  window?.gtag && window.gtag('event', action, params)
}

// push to dataLayer
export const dataLayerPush = (event: any) => {
  //@ts-ignore
  const push = window?.dataLayer?.push
  if (!!push && typeof push === 'function') {
    push(event)
  }
}
