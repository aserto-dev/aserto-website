// Primitives
import Header from 'components/layout/header'
import CustomHead from 'components/primitives/custom-head'

import React, { useEffect } from 'react'

const Playground = () => {
  useEffect(() => {
    ; (function (d, s, id) {
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
    <div className="overflow-hidden flex flex-col h-screen">
      <CustomHead
        title="Aserto"
        description="Welcome to modern authorization"
        image="images/og.png"
      />
      <div>
        <Header />
      </div>
      <iframe
        name="playgroundIframe"
        src="https://aserto-playground.netlify.app/?embedded=1"
        className="w-screen h-full overflow-hidden"
      />
    </div>
  )
}

export default Playground
