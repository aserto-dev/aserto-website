import { useEffect, useState } from 'react'
import { isMobileSafari, isSafari } from 'react-device-detect'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import Animation from './animation'

const AsertoInAction = () => {
  const [ref] = useFadeInBottom()
  const [supportedBrowser, setSupportedBrowser] = useState(true)

  /*
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
  */

  useEffect(() => {
    if (isSafari || isMobileSafari) {
      setSupportedBrowser(false)
    }
  }, [])

  return (
    <section className="relative pt-10 md:pt-10 lg:pt-24 mx-auto">
      <div className="text-center" ref={ref}>
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

export default AsertoInAction
