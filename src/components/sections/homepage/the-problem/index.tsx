// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'

// Components
import ProblemItem from './problem-item'
import Container from '../../../layout/container'
import clsx from 'clsx'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

const TheProblem = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cursor, setCursor] = useState('grab')
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    dragStart: () => {
      setCursor('grabbing')
    },
    dragEnd: () => {
      setCursor('grab')
    }
  })
  return (
    <section className="pt-8 mt-16 lg:py-12">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h1 className="mb-2 text-4xl tracking-tight text-aserto-grey-90">
            {page.theProblemSectionLabel}
          </h1>
          <h2 className="mx-auto mt-1 text-base md:leading-tight text-aserto-grey-60 text-2xl md:mt-3 font-roboto">
            {page.theProblemSectionTitle}
          </h2>
        </div>

        <div className="lg:hidden md:hidden mt-10">
          <div ref={sliderRef} className="keen-slider" style={{ cursor }}>
            {page.theProblemSectionCards?.map((card, i) => {
              if (!card) return null
              return (
                <div key={i} className="px-4 keen-slider__slide">
                  <ProblemItem data={card} />
                </div>
              )
            })}
          </div>
          {slider && (
            <Container className="mt-8">
              <div className="flex justify-center space-x-2">
                {[...Array(slider.details().size).keys()].map((i) => {
                  const isSelected = currentSlide === i
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        slider.moveToSlideRelative(i)
                      }}
                      className={clsx(
                        'w-3 h-3 transition-colors focus:outline-none rounded-full border border-aserto-grey-70',
                        { 'bg-aserto-grey-70': isSelected }
                      )}
                    />
                  )
                })}
              </div>
            </Container>
          )}
        </div>

        <div className="gap-8 mx-auto mt-10 lg:grid-cols-3 hidden lg:grid md:grid">
          {page.theProblemSectionCards?.map((card, i) => {
            if (!card) return null
            return <ProblemItem data={card} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}

export default TheProblem
