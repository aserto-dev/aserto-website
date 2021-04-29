import clsx from 'clsx'
import gsap from 'gsap'
import { DURATION } from 'lib/gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import WithEndgame from './with-endgame'

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

  useEffect(() => {
    const tl = gsap.timeline({
      smoothChildTiming: true,
      paused: true
    })

    tl.to('.svg-arrow', {
      ease: 'sine.inOut',
      overwrite: true,
      duration: DURATION * 2,
      repeat: -1,
      y: 5,
      yoyo: true,
      stagger: {
        each: 0.3,
        from: 'random'
      }
    })
    tl.fromTo(
      '.svg-dot',
      {
        y: 55,
        autoAlpha: 1
      },
      {
        y: -40,
        duration: DURATION * 2,
        autoAlpha: 0,
        ease: 'sine.inOut',
        repeat: -1,
        overwrite: true,
        stagger: {
          each: 0.3,
          from: 'random'
        }
      },
      '<'
    )

    tl.timeScale(1.5).play()
  })

  return (
    <div>
      <div className="flex justify-center mx-auto space-x-10 border-b border-white border-opacity-10 max-w-container">
        <button
          className={clsx(
            'text-sm sm:text-sm px-4 sm:px-8 font-black uppercase py-2 sm:py-4 border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest',
            {
              'text-white border-white': !isToggled,
              'text-ds-pewter-text border-transparent': isToggled
            }
          )}
          onClick={() => setIsToggled(false)}
        >
          With Aserto
        </button>
        <button
          className={clsx(
            'text-sm sm:text-sm px-4 sm:px-8 font-black uppercase py-2 sm:py-4 border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest',
            {
              'text-ds-carnation border-ds-carnation': isToggled,
              'text-ds-pewter-text border-transparent': !isToggled
            }
          )}
          onClick={() => setIsToggled(true)}
        >
          Without Aserto
        </button>
      </div>
      <div className="relative w-full max-w-4xl pt-6 mx-auto">
        <div className="image-1">
          <Image
            src="/images/without-endgame.svg"
            width={1000}
            height={486}
            loading="eager"
            alt="Without endgame"
          />
          <p className="max-w-2xl mx-auto mt-8 text-base text-center sm:text-lg md:text-xl sm:mt-12 text-ds-pewter font-book">
            DIY data tools are a nightmare to build and maintain.
          </p>
        </div>
        <div className="absolute bottom-0 w-full image-2">
          <WithEndgame />
          <p className="max-w-2xl mx-auto mt-8 text-base text-center sm:text-lg md:text-xl sm:mt-12 text-ds-pewter font-book">
            The world's first customer observability platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comparison
