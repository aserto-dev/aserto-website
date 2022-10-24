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
        Introducing Topaz, our cloud-native OSS authorizer!{' '}
        <Link
          className="font-bold underline"
          href="/blog/topaz-oss-cloud-native-authorization-combines-opa-zanzibar"
          onClick={hideBanner}
        >
          Read the announcement
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
