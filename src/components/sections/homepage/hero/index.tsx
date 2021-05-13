// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import Comparison from './comparison'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className="relative pt-24 mx-auto">
      <div className="pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          Welcome to modern <br className="hidden sm:inline" /> authorization.
        </h1>
        <h2 className="mx-auto mt-5 text-base font-bold md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl md:max-w-2xl font-roboto">
          Cloud-Native authorization as a service.
        </h2>
        <h3 className="mx-auto mt-5 text-base uppercase md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-xl font-roboto">
          Authorization as easy as an API call
        </h3>
        <div className="mx-auto mt-4 mb-16 sm:mt-16 sm:mb-20">
          <Button>Request early access</Button>
        </div>
        <Comparison />
      </div>
    </section>
  )
}

export default Hero
