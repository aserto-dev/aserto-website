// Primitives
import Header from 'components/layout/header'
import CustomHead from 'components/primitives/custom-head'
import PlaygroundBannerContext from 'components/sections/common/banners/playground/PlaygroundBannerContext'
import { useContext } from 'react'

const Playground = () => {
  useContext(PlaygroundBannerContext).hideBanner()

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
