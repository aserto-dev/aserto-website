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
        Blog
      </h1>
      <h2 className="mx-auto mt-1 text-base md:leading-tight text-aserto-grey-60 text-2xl md:mt-3 font-roboto">
        Company Updates &amp; Technology Articles
      </h2>
    </section>
  )
}

export default Hero
