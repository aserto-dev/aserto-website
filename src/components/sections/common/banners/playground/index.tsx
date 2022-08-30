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
        Going to DeveloperWeek Cloud in Austin?{' '}
        <Link
          className="font-bold underline"
          href="/events/developerweek-cloud-2022"
          onClick={hideBanner}
        >
          Meet with the Aserto team!
        </Link>
      </span>
    </div>
  ) : null
}

export default PlaygroundBanner
