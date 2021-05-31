import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { HomePageFragment } from 'lib/sanity/generated'
import TestimonialItem from './testimonial-item'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Testimonials = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  const [sliderRef] = useKeenSlider<HTMLDivElement>({})

  return (
    <section className="py-48 pb-32 sm:pb-80" ref={section}>
      <div className="px-4 text-center mb-28 sm:px-0">
        <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
          {page.testimonialsSectionTitle}
        </h2>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {page.testimonials?.map((t, i) => {
          return (
            <div key={i} className="keen-slider__slide">
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
    </section>
  )
}

export default Testimonials
