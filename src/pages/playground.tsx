// Primitives
import PageLayout from 'components/layout/page'

import React, { useEffect } from 'react'

const Playground = () => {
  useEffect(() => {
    ;(function (d, s, id) {
      var js,
        tjs = d.getElementsByTagName(s)[0]
      // react vdom will overwrite - so need to recreate
      // this upon page entry
      //if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      //@ts-ignore
      js.src = 'https://app.termly.io/embed-policy.min.js'
      //@ts-ignore
      tjs.parentNode.insertBefore(js, tjs)
    })(document, 'script', 'termly-jssdk')
  }, [])
  return (
    <PageLayout
      headProps={{
        title: 'Aserto',
        description: 'Welcome to modern authorization',
        image: 'images/og.png'
      }}
    >
      <iframe
        name="playgroundIframe"
        src="https://aserto-playground.netlify.app/?embedded=1"
        style={{
          height: '90vh',
          width: '100vw',
          overflow: 'hidden'
        }}
      />
    </PageLayout>
  )
}

export default Playground
