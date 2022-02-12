import Link from 'components/primitives/link'
import React, { useContext } from 'react'
import PlaygroundBannerContext from './PlaygroundBannerContext'

const PlaygroundBanner = () => {
  const { isVisible } = useContext(PlaygroundBannerContext)

  return isVisible ? (
    <div
      className="bg-aserto-lochivar-80 flex flex-col justify-center
                text-center text-white h-[60px] sm:h-[36px]"
    >
      <span className="align-middle">
        Want a free taste of how Aserto works?{' '}
        <Link className="font-bold underline" href="/playground">
          Give our Playground a spin.
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
