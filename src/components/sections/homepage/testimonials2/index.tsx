// import { BlockContent } from 'components/primitives/block-content'
import TestimonialItem from './testimonial-item'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import Container from 'components/layout/container'
import clsx from 'clsx'

const Testimonials = () => {
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

  const page = {
    testimonials: [
      {
        authorName: 'Sam Hall',
        authorAvatar: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        authorPosition: 'Head of Technology, Metrikus',
        companyImage: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        // quoteRaw: `“Authorization has been a constant worry over the last two
        //       years - everyone was scared of it. With Aserto, I'm so much more
        //       comfortable with authorization because I can see what's going on.
        //       Before, it was a dark art - we had a muddled permission structure.
        //       With Aserto, we have clear policies that are easy to implement and
        //       obvious to analyze. Aserto has made AuthZ something we're not
        //       scared of anymore.”`
        quoteRaw: (
          <em>
            {`“Authorization has been a constant worry over the last two
              years - everyone was scared of it. With Aserto, I'm so much more
              comfortable with authorization because I can see what's going on.
              Before, it was a dark art - we had a muddled permission structure.
              With Aserto, we have clear policies that are easy to implement and
              obvious to analyze. Aserto has made AuthZ something we're not
              scared of anymore.”`}
          </em>
        )
      },
      {
        authorName: 'James Lindenbaum',
        authorAvatar: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        authorPosition: 'Founder, Heroku & Heavybit',
        companyImage: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`“A policy-centric authorization solution for developers is a glaring
              hole in the market, and there is no team on the planet better equipped
              to build it to enterprise-grade."`}
          </em>
        )
      },
      {
        authorName: 'David Kerber',
        authorAvatar: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        authorPosition: 'VP of Technology, Spreetail',
        companyImage: {
          asset: {
            url: 'images/aserto-logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`“Authorization involves really hard problems that I want experts to
              solve. We like to focus our internal engineering efforts on our customers
              and their problems. Aserto allows us to do just that, at a small fraction
              of the cost it would take to build and maintain it ourselves, not to
              mention the opportunity cost."`}
          </em>
        )
      }
      // {
      //   authorName: 'Someone else',
      //   authorAvatar: {
      //     asset: {
      //       url: 'images/aserto-logo.png'
      //     }
      //   },
      //   authorPosition: 'Head of Technology, Metrikus',
      //   companyImage: {
      //     asset: {
      //       url: 'images/aserto-logo.png'
      //     }
      //   },
      //   quoteRaw: (
      //       <em>
      //         {`“Authorization has been a constant worry over the last two
      //         years - everyone was scared of it. With Aserto, I'm so much more
      //         comfortable with authorization because I can see what's going on.
      //         Before, it was a dark art - we had a muddled permission structure.
      //         With Aserto, we have clear policies that are easy to implement and
      //         obvious to analyze. Aserto has made AuthZ something we're not
      //         scared of anymore.”`}
      //       </em>
      //   )
      // }
    ]
  }
  return (
    <section className="mx-auto mt-20 lg:mt-0 md-mt-0  sm:pt-24 pb-20 sm:pb-28">
      <div className="lg:hidden md:hidden">
        <div ref={sliderRef} className="keen-slider" style={{ cursor }}>
          {page.testimonials?.map((t, i) => {
            return (
              <div key={i} className="px-4 keen-slider__slide">
                <TestimonialItem
                  profileName={t?.authorName ?? ''}
                  profileImageSrc={t?.authorAvatar?.asset?.url ?? '/404'}
                  companyInfo={t?.authorPosition ?? ''}
                  companyImageSrc={t?.companyImage?.asset?.url ?? '/404'}
                  quote={t?.quoteRaw}
                  // quote={<BlockContent blocks={t?.quoteRaw} />}
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
                      { 'bg-aserto-grey-90': isSelected }
                    )}
                  />
                )
              })}
            </div>
          </Container>
        )}
      </div>
      {/* <div
        className={`lg:grid md:grid lg:grid-flow-col md:grid-flow-col lg:grid-cols-3 md:grid-cols-3 gap-4 hidden`}
      > */}
      <div className={`sm:flex sm:flex-nowrap sm:items-stretch gap-4 hidden`}>
        {page.testimonials?.map((testimonial, i) => {
          return (
            <TestimonialItem
              key={String(testimonial?.authorName ?? i)}
              companyInfo={testimonial?.authorPosition ?? ''}
              companyImageSrc={testimonial?.companyImage?.asset?.url ?? '/404'}
              profileImageSrc={testimonial?.authorAvatar?.asset?.url ?? '/404'}
              profileName={testimonial?.authorName}
              quote={testimonial?.quoteRaw}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
