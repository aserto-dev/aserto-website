import React, { useEffect } from 'react'

const HubspotNewsletterSignup = () => {
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
          formId: '0ba34fad-afcf-4dde-8b51-b73c32c9595c',
          target: '#hubspotForm'
        })
      }
    })
  }, [])

  return (
    <>
      <link rel="stylesheet" href="/css/contactform.css"></link>
      <div id="hubspotForm"></div>
    </>
  )
}

export default HubspotNewsletterSignup
