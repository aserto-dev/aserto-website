import React, { useEffect } from 'react'

const HubspotContactForm = () => {
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
          formId: 'fc7c232e-cab9-4eb5-822e-5d0c0d3d2714',
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

export default HubspotContactForm
