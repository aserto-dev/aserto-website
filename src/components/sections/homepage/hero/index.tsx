import { useEffect, useState } from 'react'
import { isMobileSafari, isSafari } from 'react-device-detect'

// Libs
import { HomePageFragment } from 'lib/sanity/generated'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Button from 'components/primitives/button'

// Components
import Animation from './animation'
import s from './hero.module.css'
import Image from 'components/primitives/image'

const Hero = ({ page }: { page: HomePageFragment }) => {
  const [ref] = useFadeInBottom()
  const [supportedBrowser, setSupportedBrowser] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.getElementsByTagName('html')[0].scrollTop
      if (scrollPosition > 221) {
        document!.getElementById('btn-scroll')!.style!.opacity = '0'
      } else if (scrollPosition < 296) {
        document!.getElementById('btn-scroll')!.style!.opacity = '1'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isSafari || isMobileSafari) {
      setSupportedBrowser(false)
    }
  }, [])

  const goToId = (id: string) => {
    const elmnt = document.getElementById(id)
    if (elmnt) {
      const yOffset = -100
      const y = elmnt.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const getPillarStyleBasedOnIndex = (index: number) => {
    const pillarStyleObj = [
      `border-aserto-lochivar-100 ${s['lochivar-gradient-background']} bg-aserto-lochivar-10`,
      `border-aserto-indigo-accent-30 ${s['indigo-gradient-background']} bg-aserto-indigo-10`,
      `border-aserto-plum-accent-30 ${s['plum-gradient-background']} bg-aserto-plum-10`
    ]
    return pillarStyleObj[index]
  }

  return (
    <section className="relative pt-10 md:pt-10 lg:pt-24 mx-auto">
      <div className="text-center" ref={ref}>
        <h1 className="text-4xl leading-none font-normal tracking-tight text-aserto-grey-90 md:text-6xl mx-auto xl:text-5xl">
          {page.title}
        </h1>
        <h2 className="mx-auto mt-1 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-3 md:text-3xl font-roboto">
          {page.subtitle}
        </h2>
        <div className="grid lg:grid-flow-col md:grid-flow-col lg:grid-cols-3 gap-4 mt-6 text-left">
          {page.pillars?.map((pillar, i) => {
            if (!pillar) return null
            const pillarStyle = getPillarStyleBasedOnIndex(i)
            return (
              <div
                key={pillar.title}
                onClick={() => goToId(`intro-${i + 1}`)}
                className={`flex-1 flex flex-col border-t border-b border-dotted justify-center items-center p-4 lg:p-4 md:p-8 ${s.section} ${pillarStyle} `}
              >
                <div className="flex items-center">
                  <Image
                    layout="native"
                    src={String(pillar.imagePath)}
                    alt="auth easy icon"
                  />
                  <h4 className="text-aserto-grey-90 text-md ml-4 font-bold text-lg">
                    {pillar.title}
                  </h4>
                </div>
                <div
                  className={`text-aserto-grey-60 mt-4 ${s['pillar-card-description']}`}
                >
                  {pillar.description}
                </div>
              </div>
            )
          })}
        </div>

        <div
          id="btn-scroll"
          className={`mt-10 mg:hidden lg:hidden ${s['btn-container-sticky']}`}
        >
          <Button as="a" href="/#sign-up" className="inline-flex items-center">
            {page.ctaLabel}
          </Button>
        </div>
        <div className={`mt-10 mb-20 md:mt-14 lg:mt-16 lg:mb-56 md:mb-56 `}>
          <Button as="a" href="/#sign-up" className="inline-flex items-center">
            {page.ctaLabel}
          </Button>
        </div>

        <div className="hidden lg:block md:block">
          <h2 className="mb-12 text-4xl tracking-tight text-aserto-grey-90">
            Aserto in Action
          </h2>
          <div>
            {supportedBrowser ? (
              <>
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
              </>
            ) : (
              <video
                className="relative z-10 mx-auto"
                autoPlay
                loop
                muted
                playsInline
                src="/images/homepage/aserto-safari.mp4"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
