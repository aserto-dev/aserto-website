// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const Hero = () => {
  const [ref] = useFadeInBottom()
  return (
    <section
      className="relative pt-16 mx-auto mb-20 text-center sm:pt-28"
      ref={ref}
    >
      <h1 className="text-5xl leading-none text-aserto-grey-90 mx-auto">
        Aserto Quickstarts
      </h1>
      <h2 className="mx-auto mt-1 text-base md:leading-tight text-aserto-grey-90 text-2xl md:mt-6 font-roboto">
        Select a template to get started:
      </h2>
    </section>
  )
}

export default Hero
