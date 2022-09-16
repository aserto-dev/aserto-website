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
        Wondering about Policy-based Access Management?{' '}
        <Link
          className="font-bold underline"
          href="/resources/policy-based-access-management-market-compass"
          onClick={hideBanner}
        >
          Read the report!
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
