// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import { HomePageFragment } from 'lib/sanity/generated'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TimelineMax } from 'gsap/all'
import Animation from './animation'

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
        <div>
          <svg
            width="940"
            height="940"
            className="absolute z-0 w-full left-36 -top-32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity=".5">
              <g opacity=".75" filter="url(#filter0_f)">
                <mask
                  id="a"
                  maskUnits="userSpaceOnUse"
                  x="214"
                  y="214"
                  width="512"
                  height="512"
                >
                  <path fill="#fff" d="M214 214h512v512H214z" />
                </mask>
                <g mask="url(#a)">
                  <g
                    style={{ mixBlendMode: 'overlay' }}
                    filter="url(#filter1_f)"
                  >
                    <circle
                      cx="336.144"
                      cy="630.627"
                      r="233.971"
                      fill="#277F82"
                    />
                  </g>
                  <g
                    style={{ mixBlendMode: 'overlay' }}
                    filter="url(#filter2_f)"
                  >
                    <circle
                      cx="638.994"
                      cy="630.626"
                      r="243.787"
                      fill="#376EBF"
                    />
                  </g>
                  <g
                    style={{ mixBlendMode: 'overlay' }}
                    filter="url(#filter3_f)"
                  >
                    <circle
                      cx="623.53"
                      cy="330.719"
                      r="240.537"
                      fill="#277F82"
                    />
                  </g>
                  <g
                    style={{ mixBlendMode: 'overlay' }}
                    filter="url(#filter4_f)"
                  >
                    <circle
                      cx="349.892"
                      cy="324.795"
                      r="231.264"
                      fill="#693BCC"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="0"
                y="0"
                width="940"
                height="940"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="107"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter1_f"
                x="-37.661"
                y="256.821"
                width="747.611"
                height="747.611"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="69.917"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter2_f"
                x="249.506"
                y="241.139"
                width="778.975"
                height="778.975"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="72.85"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter3_f"
                x="239.235"
                y="-53.576"
                width="768.589"
                height="768.589"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="71.879"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter4_f"
                x="-19.589"
                y="-44.686"
                width="738.962"
                height="738.962"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="69.108"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
          <Animation />
        </div>
      </div>
    </section>
  )
}

export default Hero
