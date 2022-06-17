// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const Hero = () => {
  const [ref] = useFadeInBottom()
  return (
    <section
      className="relative pt-16 mx-auto mb-20 text-center sm:pt-28 sm:text-left"
      ref={ref}
    >
      <h1 className="text-4xl leading-none tracking-tight text-aserto-grey-90 mx-auto">
        Aserto landing pages
      </h1>
    </section>
  )
}

export default Hero
