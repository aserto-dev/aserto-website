// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import Comparison from './comparison'
import { HomePageFragment } from 'lib/sanity/generated'

const Hero = ({ page }: { page: HomePageFragment }) => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative pt-24 mx-auto">
      <div className="pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:max-w-3xl lg:max-w-2xl max-w-xl mx-auto xl:text-7.5xl">
          {page.title}
        </h1>
        <h2 className="mx-auto mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-3xl md:max-w-2xl font-roboto">
          {page.subtitle}
        </h2>
        <h3 className="mx-auto mt-5 text-base uppercase md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-xl font-roboto">
          {page.slogan}
        </h3>
        <div className="mx-auto mt-4 mb-16 sm:mt-16 sm:mb-20">
          <Button>{page.ctaLabel}</Button>
        </div>
        <Comparison />
      </div>
    </section>
  )
}

export default Hero
