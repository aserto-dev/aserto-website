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
          href="/resources/fine-grained-authorization-ebook"
          onClick={hideBanner}
        >
          Get your copy of the fine-grained authorization eBook!{' '}
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
