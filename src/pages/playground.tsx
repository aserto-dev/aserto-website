// Primitives
import Header from 'components/layout/header'
import CustomHead from 'components/primitives/custom-head'
import { asertoPlaygroundRootUrl } from 'lib/constants'
import React, { useContext, useEffect } from 'react'
import PlaygroundBannerContext from 'components/sections/common/banners/playground/PlaygroundBannerContext'

const Playground = () => {
  const { hideBanner } = useContext(PlaygroundBannerContext)

  useEffect(() => hideBanner(), [hideBanner])

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
        src={asertoPlaygroundRootUrl + '/?embedded=1'}
        className="w-screen h-full overflow-hidden"
      />
    </div>
  )
}

export default Playground
