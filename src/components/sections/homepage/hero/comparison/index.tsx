import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import gsap from 'gsap'

import { DURATION } from 'lib/gsap'

const Comparison = () => {
  const [isToggled, setIsToggled] = useState(false)
  const timelineRef = useRef<TimelineMax>()

  useEffect(() => {
    const image1 = document.querySelectorAll('.image-1')
    const image2 = document.querySelectorAll('.image-2')

    timelineRef.current = gsap.timeline({
      smoothChildTiming: true,
      paused: true,
      defaults: {
        overwrite: true
      }
    })

    timelineRef.current.fromTo(
      image2,
      {
        autoAlpha: 1
      },
      { ease: 'power1.inOut', duration: DURATION, autoAlpha: 0 }
    )
    timelineRef.current.fromTo(
      image1,
      {
        autoAlpha: 0
      },
      { ease: 'power1.inOut', duration: DURATION, autoAlpha: 1 }
    ),
      '>-.25'
  }, [])

  useEffect(() => {
    if (!timelineRef.current) return
    if (isToggled) {
      timelineRef.current.timeScale(2.23).play()
    } else {
      timelineRef.current.timeScale(2.23).reverse()
    }
  }, [isToggled])

  return (
    <div>
      <div className="flex justify-center mx-auto mt-1 space-x-10 border-b border-aserto-grey-90 border-opacity-10 max-w-container">
        <button
          className={clsx(
            'text-sm sm:text-sm px-4 sm:px-8 font-bold uppercase py-2 sm:py-4 border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto',
            {
              'text-aserto-grey-90 border-aserto-grey-90': !isToggled,
              'text-aserto-grey-30 border-transparent': isToggled
            }
          )}
          onClick={() => setIsToggled(false)}
        >
          With Aserto
        </button>
        <button
          className={clsx(
            'text-sm sm:text-sm px-4 sm:px-8 font-bold uppercase py-2 sm:py-4 border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto',
            {
              'text-aserto-grey-90 border-aserto-grey-90': isToggled,
              'text-aserto-grey-60 border-transparent': !isToggled
            }
          )}
          onClick={() => setIsToggled(true)}
        >
          Without Aserto
        </button>
      </div>
      <div className="relative w-full pt-16 mx-auto max-w-container">
        <div className="image-1">
          <Image
            src="/images/without-endgame.svg"
            width={1216}
            height={720}
            loading="eager"
            alt="Without endgame"
          />
        </div>
        <div className="absolute w-full top-16 image-2">
          <Image
            src="/images/with-endgame.svg"
            width={1216}
            height={720}
            loading="eager"
            alt="With endgame"
          />
        </div>
      </div>
    </div>
  )
}

export default Comparison
