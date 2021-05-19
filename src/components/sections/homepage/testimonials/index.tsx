import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'lib/sanity'
import { HomePageFragment } from 'lib/sanity/generated'
import TestimonialItem from './testimonial-item'

const Testimonials = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-48 pb-32 sm:pb-80" ref={section}>
      <div className="px-4 text-center mb-28 sm:px-0">
        <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
          {page.testimonialsSectionTitle}
        </h2>
      </div>
      <TestimonialItem
        profileName={page.testimonial?.authorName ?? ''}
        profileimageSrc={page.testimonial?.authorAvatar?.asset?.url ?? '/404'}
        companyName={page.testimonial?.authorPosition ?? ''}
        quote={<BlockContent blocks={page.testimonial?.quoteRaw} />}
      />
    </section>
  )
}

export default Testimonials
