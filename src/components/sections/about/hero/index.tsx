import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './hero.module.css'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className={clsx('relative pt-80 mx-auto pb-44', s.background)}>
      <div className="relative z-10 pt-3 text-center" ref={ref}>
        <p className="mb-2 font-bold leading-tight uppercase text-aserto-plum-100 sm:mb-4 sm:text-base tracking-h4">
          About Us
        </p>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          Authorization is broken
        </h1>
        <p className="w-full mx-auto mt-5 text-base text-left md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl sm:w-10/12 font-roboto">
          At Aserto, we want modern SaaS applications to be as enjoyable for IT
          to operate as they are for their core users to use. Today, the IT
          experience for SaaS applications is a dog’s breakfast - each
          application has to reinvent permissions, roles, authorization, and
          audit trails - critical features, but ones that don’t differentiate
          the application and are therefore often neglected, and incur a high
          opportunity cost for developers. Worse, this wheel-reinvention creates
          a fractured and frustrating experience for the IT staff that operate
          these applications with inconsistent and incomplete controls and
          permissions, resulting in misconfigurations, data leaks, and manual,
          soul-crushing compliance audits.
        </p>
      </div>
    </section>
  )
}

export default Hero
