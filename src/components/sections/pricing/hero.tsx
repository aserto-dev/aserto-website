// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { Pricing } from 'lib/sanity/generated'

const Hero = ({ page }: { page: Pricing }) => {
  const [ref] = useFadeInBottom()
  return (
    <section
      className="relative pt-16 mx-auto mb-20 text-center sm:pt-28"
      ref={ref}
    >
      <h1 className="text-5xl leading-none text-aserto-grey-90 mx-auto">
        {page.title}
      </h1>
    </section>
  )
}

export default Hero
