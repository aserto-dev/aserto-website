import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import Comparison from '../../comparison'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <div className="relative bg-ds-background">
      <main className="px-4 mx-auto pt-28 max-w-container">
        <div className="text-center" ref={ref}>
          <h1 className="text-5xl leading-none tracking-tight text-white md:text-6xl xl:text-7.5xl">
            Welcome to modern <br className="hidden sm:inline" /> authorization.
          </h1>
          <p className="mx-auto mt-5 text-base md:leading-tight text-ds-gray sm:text-lg md:mt-10 md:text-2xl md:max-w-2xl font-book">
            Aserto is a cloud-native authorization service that provides
            fine-grained, real-time access control for your SaaS application.
          </p>
          <div className="mx-auto mt-4 mb-10 sm:mt-16 sm:mb-20">
            <Button>Request early access</Button>
          </div>
          <Comparison />
        </div>
      </main>
    </div>
  )
}

export default Hero
