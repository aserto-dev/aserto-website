import clsx from 'clsx'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { HomePageFragment } from 'lib/sanity/generated'

const Comparison = ({
  page,
  activeFeatureIndex,
  setActiveFeatureIndex
}: {
  page: HomePageFragment
  activeFeatureIndex: number
  setActiveFeatureIndex: (n: number) => void
}) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slidesPerView: 2,
    loop: false,
    spacing: 20,
    centered: true,
    breakpoints: {
      '(max-width: 800px)': {
        slidesPerView: 1.8
      },
      '(max-width: 520px)': {
        slidesPerView: 1.6
      },
      '(max-width: 410px)': {
        slidesPerView: 1.5
      }
    }
  })

  return (
    <div>
      <div
        className="justify-center hidden gap-10 mx-auto text-center border-b lg:grid border-aserto-grey-90 border-opacity-10 max-w-container"
        style={{
          gridTemplateColumns: `repeat(${page.features?.length}, 1fr)`
        }}
      >
        {page.features?.map((feature, i) => {
          const isActive = i === activeFeatureIndex
          return (
            <button
              className={clsx(
                'text-sm sm:text-sm font-bold mx-auto justify-center text-center flex items-end max-w-[320px] uppercase border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto cursor-pointer',
                {
                  'text-aserto-grey-90 border-aserto-grey-90': isActive,
                  'text-aserto-grey-60 border-transparent': !isActive
                }
              )}
              onClick={() => setActiveFeatureIndex(i)}
              key={i}
            >
              <span className="inline-block w-full px-4 py-2 cursor-pointer sm:px-8 sm:py-4">
                {feature?.title}
              </span>
            </button>
          )
        })}
      </div>
      <div className="flex lg:hidden">
        <div ref={sliderRef} className="w-full keen-slider">
          {page.features?.map((feature, i) => {
            const isActive = i === activeFeatureIndex
            return (
              <button
                className={clsx(
                  'text-sm sm:text-sm max-w-[320px] font-bold uppercase border-b-2 sm:border-b-4 focus:outline-none transition-colors tracking-wide sm:tracking-widest font-roboto cursor-pointer',
                  'keen-slider__slide',
                  {
                    'text-aserto-grey-90 border-aserto-grey-90': isActive,
                    'text-aserto-grey-60 border-transparent': !isActive
                  }
                )}
                onClick={() => setActiveFeatureIndex(i)}
                key={i}
              >
                <span className="inline-block w-full px-4 py-2 cursor-pointer sm:px-8 sm:py-4">
                  {feature?.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Comparison
