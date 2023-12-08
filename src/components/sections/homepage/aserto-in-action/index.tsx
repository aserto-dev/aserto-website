import { useMemo } from 'react'
import { isMobile, isSafari } from 'react-device-detect'
import NoSSR from '../../common/NoSSR'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import Animation from './animation'
import Link from 'components/primitives/link'
import React from 'react'

const AsertoInAction = () => {
  const [ref] = useFadeInBottom()
  const supportedBrowser = useMemo(() => !isMobile && !isSafari, [])

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

  return (
    <section className="relative mx-auto my-4">
      <div className="text-center" ref={ref}>
        <NoSSR>
          {supportedBrowser ? (
            <Animation />
          ) : (
            <video
              className="relative z-10 mx-auto"
              autoPlay
              loop
              muted
              playsInline
              src="/images/homepage/animation-safari.mp4"
            />
          )}
        </NoSSR>
      </div>
    </section>
  )
}

export default AsertoInAction

export const AsertoInActionValueProp = ({
  title,
  direction
}: {
  title: string
  direction: string
}) => {
  const dirStyle = direction === 'left' ? 'xl:order-2' : ''
  return (
    <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
      <div
        className={`text-center xl:text-left ${dirStyle} xl:translate-y-1/3 mb-8 mx-4`}
      >
        <div className="sm:w-9/12 xl:w-[430px] mx-auto">
          <h2>{title}</h2>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
      </div>
      <div className="w-[700px]">
        <AsertoInAction />
      </div>
    </div>
  )
}
