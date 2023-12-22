import React, { useEffect } from 'react'

const HubspotSchedulingEmbed = ({
  hubSpotDataSrc
}: {
  hubSpotDataSrc?: string
}) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="meetings-iframe-container"
      data-src={
        hubSpotDataSrc ??
        'https://meetings.hubspot.com/omri-gazitt/speak-with-an-engineer?embed=true'
      }
    ></div>
  )
}

export default HubspotSchedulingEmbed
