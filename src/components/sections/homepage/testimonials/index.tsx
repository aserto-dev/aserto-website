import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { HomePageFragment } from 'lib/sanity/generated'
import TestimonialItem from './testimonial-item'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import IconQuote from 'icons/quote.svg'
import { useState } from 'react'
import clsx from 'clsx'
import Container from 'components/layout/container'

const Testimonials = ({ page }: { page: HomePageFragment }) => {
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
    <section className="relative py-48 pb-32 sm:pb-80" ref={section}>
      <div className="px-4 text-center mb-28 sm:px-0">
        <h2 className="text-5xl tracking-tight text-aserto-grey-90">
          {page.testimonialsSectionTitle}
        </h2>
      </div>
      <div className="relative pt-2 sm:pt-10">
        <div className="absolute z-0 -left-2 -top-20 sm:left-32">
          <IconQuote />
        </div>
        <div ref={sliderRef} className="keen-slider" style={{ cursor }}>
          {page.testimonials?.map((t, i) => {
            return (
              <div key={i} className="px-4 keen-slider__slide">
                <TestimonialItem
                  profileName={t?.authorName ?? ''}
                  profileimageSrc={t?.authorAvatar?.asset?.url ?? '/404'}
                  companyName={t?.authorPosition ?? ''}
                  quote={<BlockContent blocks={t?.quoteRaw} />}
                />
              </div>
            )
          })}
          {page.testimonials?.map((t, i) => {
            return (
              <div key={i} className="px-4 keen-slider__slide">
                <TestimonialItem
                  profileName={t?.authorName ?? ''}
                  profileimageSrc={t?.authorAvatar?.asset?.url ?? '/404'}
                  companyName={t?.authorPosition ?? ''}
                  quote={<BlockContent blocks={t?.quoteRaw} />}
                />
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
    </section>
  )
}

export default Testimonials
