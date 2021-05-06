import { useFadeInBottom } from 'hooks/use-gsap'
import TestimonialItem from './testimonial-item'

const testimonials: React.ComponentPropsWithoutRef<typeof TestimonialItem>[] = [
  {
    quote:
      'A perfect opportunity for Packet. When we have spare capacity, we can sell it through Akash’s blockchain marketplace, ensuring complete utilization of our cloud servers.',
    profileName: 'Jacob Smith',
    companyName: 'Company Name',
    profileimageSrc: '/images/testimonials/testimonial-profile.png',
    companyImageSrc: '/images/testimonials/company.svg'
  }
]

const Testimonials = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-32 pb-44" ref={section}>
      <div className="px-4 text-center mb-28 sm:px-0">
        <p className="mb-2 font-bold leading-tight uppercase text-ds-accent sm:mb-4 sm:text-base tracking-h4">
          section label (tbd)
        </p>
        <h2 className="mb-2 text-3xl tracking-tight text-white sm:mb-10 sm:text-5xl">
          SECTION TITLE (TBD)
        </h2>
      </div>
      {testimonials.map((testimonial, _i) => (
        <TestimonialItem {...testimonial} key={testimonial.profileName} />
      ))}
    </section>
  )
}

export default Testimonials
