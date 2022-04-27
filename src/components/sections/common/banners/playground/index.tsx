import Link from 'components/primitives/link'
import React, { useContext } from 'react'
import PlaygroundBannerContext from './PlaygroundBannerContext'

const PlaygroundBanner = () => {
  const { isVisible, hideBanner } = useContext(PlaygroundBannerContext)

  return isVisible ? (
    <div
      className="bg-aserto-lochivar-80 hidden lg:flex flex-col justify-center
                text-center text-white h-[60px] sm:h-[36px]"
    >
      {/* 
      <span className="align-middle">
        Want a free taste of how Aserto works?{' '}
        <Link className="font-bold underline" href="/playground">
          Give our Playground a spin.
        </Link>
      </span>
      */}
      <span className="align-middle">
        Going to Kubecon EU?{' '}
        <Link
          className="font-bold underline"
          href="/events/kubecon-eu-2022"
          onClick={hideBanner}
        >
          Meet with the Aserto team!
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
