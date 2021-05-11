import { useFadeInBottom } from 'hooks/use-gsap'
import TestimonialItem from './testimonial-item'

const testimonials: React.ComponentPropsWithoutRef<typeof TestimonialItem>[] = [
  {
    quote:
      '“A perfect opportunity for Packet. When we have spare capacity, we can sell it through Akash’s blockchain marketplace, ensuring complete utilization of our cloud servers.”',
    profileName: 'Omri Gazitt',
    companyName: 'CEO, Aserto',
    profileimageSrc: '/images/testimonials/testimonial-profile.png'
  }
]

const Testimonials = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="py-48 pb-80" ref={section}>
      <div className="px-4 text-center mb-28 sm:px-0">
        <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
          What others say
        </h2>
      </div>
      {testimonials.map((testimonial, _i) => (
        <TestimonialItem {...testimonial} key={testimonial.profileName} />
      ))}
    </section>
  )
}

export default Testimonials
