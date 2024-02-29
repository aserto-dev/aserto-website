import Link from 'components/primitives/link'
import React, { useContext } from 'react'
import PlaygroundBannerContext from './PlaygroundBannerContext'

const PlaygroundBanner = () => {
  const { isVisible, hideBanner } = useContext(PlaygroundBannerContext)

  return isVisible ? (
    <div
      className="bg-banner hidden lg:flex flex-col justify-center
                text-center text-white h-[60px] sm:h-[36px]"
    >
      <span className="align-middle">
        <Link
          className="font-bold underline"
          href="/resources/architecture-authorization-applications-webinar"
          onClick={hideBanner}
        >
          The Architecture of Scalable, Granular Permissions Webinar - Watch it Now!{' '}
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
