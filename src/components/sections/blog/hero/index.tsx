// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const Hero = () => {
  const [ref] = useFadeInBottom()
  return (
    <section
      className="relative pt-16 mx-auto mb-20 text-center sm:pt-28 sm:mb-52 sm:text-left"
      ref={ref}
    >
      <h1 className="text-5xl leading-none tracking-tight text-white md:text-6xl xl:text-7.5xl">
        Blog
      </h1>
      <p className="mt-8 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl md:max-w-2xl font-roboto">
        Company Updates &amp; Technology Articles
      </p>
    </section>
  )
}

export default Hero
