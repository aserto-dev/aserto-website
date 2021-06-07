import { BlockContent } from 'components/primitives/block-content'
import { HomePageFragment } from 'lib/sanity/generated'
import TestimonialItem from './testimonial-item'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import Image from 'components/primitives/image'
import s from './testimonials.module.css'
import Container from 'components/layout/container'
import clsx from 'clsx'

const Testimonials = ({ page }: { page: HomePageFragment }) => {
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
    <section className="mx-auto mt-20 lg:mt-0 md-mt-0  sm:pt-24 pb-20 sm:pb-28">
      <div className="px-4 text-center mb-10 sm:px-0">
        <h2 className="text-4xl tracking-tight text-aserto-grey-90">
          {page.testimonialsSectionTitle}
        </h2>
      </div>
      <div className="lg:hidden md:hidden">
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
      <div
        className={`lg:grid md:grid lg:grid-flow-col md:grid-flow-col lg:grid-cols-3 md:grid-cols-3 gap-4 ${s['testimonial-grid']} hidden`}
      >
        {page.testimonials?.map((testimonial, i) => {
          return (
            <div
              key={String(testimonial?.authorName ?? i)}
              className={`bg-aserto-grey-5 border-aserto-grey-20 flex-1 min-h-96 p-4 flex flex-col items-center rounded border text-aserto-grey-90 ${s['testimonial-card']}`}
            >
              <Image
                className="rounded-full border-2 border-aserto-lochivar-accent-40"
                layout="native"
                width={160}
                height={160}
                src={testimonial?.authorAvatar?.asset?.url ?? ''}
              />
              <div className="text-aserto-grey-90 font-bold text-lg mt-4">
                {testimonial?.authorName}
              </div>
              <div>{testimonial?.authorPosition}</div>
              <BlockContent
                className="mt-10 px-2"
                blocks={testimonial?.quoteRaw}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
