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
      <span className="align-middle">
        <Link
          className="font-bold underline"
          href="/blog/aserto-sponsors-eic-identiverse-2023"
          onClick={hideBanner}
        >
          Meet us at EIC or Identiverse!{' '}
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
