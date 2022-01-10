import { HomePageFragment } from 'lib/sanity/generated'
import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import CustomerItem from './customer-item'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import Container from 'components/layout/container'
import clsx from 'clsx'

const CustomerSpotlight = ({
  page,
  caseStudies
}: {
  page: HomePageFragment
  caseStudies: CaseStudyMetaFragment[]
}) => {
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
  const spotlightItems: CaseStudyMetaFragment[] = [
    ...caseStudies,
    {
      slug: { current: '' },
      titleRaw: [
        {
          children: [
            {
              text: 'Aserto helps customers solve challenging authorization problems',
              _type: 'span'
            }
          ],
          style: 'normal',
          _type: 'block'
        }
      ],
      logo: {
        asset: {
          url: ''
        }
      }
    }
  ]
  return (
    <section className="mx-auto mt-20 lg:mt-0 md:mt-0 sm:pt-24 pb-20 sm:pb-28">
      <div className="text-center mb-10 sm:px-0">
        <h2 className="text-4xl tracking-tight text-aserto-grey-90">
          {page.customerSpotlightSectionTitle}
        </h2>
      </div>
      <div className="w-full">
        <div ref={sliderRef} className="keen-slider" style={{ cursor }}>
          {spotlightItems.map((c, i) => {
            return (
              <div key={i} className="keen-slider__slide">
                <CustomerItem data={c} />
              </div>
            )
          })}
        </div>
        {slider && (
          <Container className="mt-8">
            <div className="flex justify-center space-x-2 lg:space-x-5">
              {[...Array(slider.details().size).keys()].map((i) => {
                const isSelected = currentSlide === i
                return (
                  <button
                    key={i}
                    onClick={() => {
                      slider.moveToSlideRelative(i)
                    }}
                    className={clsx(
                      'w-3 h-3 lg:w-6 lg:h-6 transition-colors focus:outline-none rounded-full border border-aserto-grey-70',
                      { 'bg-aserto-grey-90': isSelected }
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

export default CustomerSpotlight
