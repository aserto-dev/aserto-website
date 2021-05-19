// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import Comparison from './comparison'
import { HomePageFragment } from 'lib/sanity/generated'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TimelineMax } from 'gsap/all'

const Hero = ({ page }: { page: HomePageFragment }) => {
  const [ref] = useFadeInBottom()
  const textRef = useRef<HTMLHeadingElement>(null)
  const textRef2 = useRef<HTMLHeadingElement>(null)
  const textRef3 = useRef<HTMLHeadingElement>(null)
  const timeline = useRef<TimelineMax>()

  useEffect(() => {
    timeline.current = gsap.timeline({
      paused: true,
      repeat: -1,
      smoothChildTiming: true
    })

    timeline.current.set(
      [textRef.current, textRef2.current, textRef3.current],
      {
        autoAlpha: 0,
        y: 20
      }
    )

    timeline.current.to(textRef.current, {
      y: 0,
      autoAlpha: 1
    })
    timeline.current.to(
      textRef.current,
      {
        y: -20,
        autoAlpha: 0
      },
      '+=2'
    )
    timeline.current.to(textRef2.current, {
      y: 0,
      autoAlpha: 1
    })
    timeline.current.to(
      textRef2.current,
      {
        y: -20,
        autoAlpha: 0
      },
      '+=2'
    )
    timeline.current.to(textRef3.current, {
      y: 0,
      autoAlpha: 1
    })
    timeline.current.to(
      textRef3.current,
      {
        y: -20,
        autoAlpha: 0
      },
      '+=2'
    )

    timeline.current.play()
  }, [])

  return (
    <section className="relative pt-24 mx-auto">
      <div className="pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:max-w-3xl lg:max-w-2xl max-w-xl mx-auto xl:text-7.5xl">
          {page.title}
        </h1>
        <h2 className="mx-auto mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-3xl md:max-w-2xl font-roboto">
          {page.subtitle}
        </h2>
        <div className="relative h-16 overflow-hidden">
          <h3
            ref={textRef}
            style={{ opacity: 0 }}
            className="absolute top-0 w-full mx-auto mt-5 text-base font-medium text-center uppercase md:leading-tight text-aserto-indigo-100 sm:text-lg md:mt-10 md:text-xl font-roboto"
          >
            Authorization as easy as an API call
          </h3>
          <h3
            ref={textRef2}
            style={{ opacity: 0 }}
            className="absolute top-0 w-full mx-auto mt-5 text-base font-medium text-center uppercase md:leading-tight text-aserto-indigo-100 sm:text-lg md:mt-10 md:text-xl font-roboto"
          >
            Enterprise-ready permissions and RBAC
          </h3>
          <h3
            ref={textRef3}
            style={{ opacity: 0 }}
            className="absolute top-0 w-full mx-auto mt-5 text-base font-medium text-center uppercase md:leading-tight text-aserto-indigo-100 sm:text-lg md:mt-10 md:text-xl font-roboto"
          >
            Modern GitOps workflow for policy-as-code
          </h3>
        </div>
        <div className="mx-auto mt-4 mb-16 sm:mt-16 sm:mb-20">
          <Button>{page.ctaLabel}</Button>
        </div>
        <Comparison />
      </div>
    </section>
  )
}

export default Hero
