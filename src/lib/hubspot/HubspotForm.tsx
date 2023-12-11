import React, { useEffect } from 'react'

const HubspotForm = ({ formId }: { formId: string }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '21300286',
          formId,
          target: '#hubspotForm'
        })
      }
    })
  }, [formId])

  return (
    <>
      <link rel="stylesheet" href="/static/contactform.css"></link>
      <div id="hubspotForm"></div>
    </>
  )
}

export default HubspotForm
