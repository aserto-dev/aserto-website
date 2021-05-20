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

  useEffect(() => {
    const delay = 3
    const timelines: TimelineMax[] = []
    document
      .querySelectorAll('[data-slogan-item]')
      .forEach((item, i, { length }) => {
        const tl = gsap.timeline({
          paused: true,
          repeat: -1,
          smoothChildTiming: true,
          delay: i * delay,
          repeatDelay: (length - 1) * delay
        })
        tl.set(item, {
          autoAlpha: 0,
          y: 20
        })
        tl.to(item, {
          y: 0,
          autoAlpha: 1
        })
        tl.to(
          item,
          {
            y: -20,
            autoAlpha: 0
          },
          `+=${delay / 2}`
        )
        tl.play()
        timelines.push(tl)
      })

    return () => {
      timelines.forEach((tl) => tl.kill())
    }
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
          {page.slogan?.map((s, i) => {
            return (
              <h3
                ref={textRef}
                style={{ opacity: 0 }}
                className="absolute top-0 w-full mx-auto mt-5 text-base font-medium text-center uppercase md:leading-tight text-aserto-indigo-100 sm:text-lg md:mt-10 md:text-xl font-roboto"
                key={i}
                data-slogan-item
              >
                {s?.text}
              </h3>
            )
          })}
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
