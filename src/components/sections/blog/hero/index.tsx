import { useFadeInBottom } from 'hooks/use-gsap'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative mx-auto pt-28 mb-52" ref={ref}>
      <h1 className="text-5xl leading-none tracking-tight text-white md:text-6xl xl:text-7.5xl">
        Blog
      </h1>
      <p className="mt-8 text-base md:leading-tight text-ds-gray sm:text-lg md:mt-10 md:text-2xl md:max-w-2xl font-book">
        Company Updates & Technology Articles
      </p>
    </section>
  )
}

export default Hero
