import { dataLayerPush } from 'lib/ga'
import { useEffect } from 'react'
import { getFormNameFromId } from './HubspotIds'

export const useReportHubspotFormEventsToGoogleAnalytics = () => {
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (
        event?.data?.type === 'hsFormCallback' &&
        event?.data?.eventName === 'onFormSubmit'
      ) {
        const formName = getFormNameFromId(event?.data?.id as string)
        !!formName && dataLayerPush({ event: formName })
      }
    })
  }, [])
}
