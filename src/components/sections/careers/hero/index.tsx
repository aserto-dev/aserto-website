import { useFadeInBottom } from 'hooks/use-gsap'
import { BlockContent } from 'components/primitives/block-content'
import { CareersPageFragment } from 'lib/sanity/generated'
import Image from 'components/primitives/image'

const Hero = ({ page }: { page: CareersPageFragment }) => {
  const [ref] = useFadeInBottom()

  return (
    <section className="w-10/12 pt-24 pb-12 mx-auto sm:pb-44">
      <div className="relative z-10 pt-3 text-center" ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          {page.title}
        </h1>
        <p className="mt-8 mb-12 text-aserto-grey-60 text-[22px]">
          {page.firstSubtitle}
        </p>
        <div className="relative grid items-center gap-4 mx-auto mt-24 lg:gap-8 lg:grid-cols-2">
          {page.facts?.map((fact, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    maxWidth:
                      fact?.icon?.asset?.metadata?.dimensions?.width ?? 0
                  }}
                  className="mx-auto"
                >
                  <Image
                    src={fact?.icon?.asset?.url ?? '/404'}
                    width={fact?.icon?.asset?.metadata?.dimensions?.width ?? 0}
                    height={
                      fact?.icon?.asset?.metadata?.dimensions?.height ?? 0
                    }
                  />
                </div>
                <p className="mt-2 font-semibold text-aserto-grey-90 text-[22px]">
                  {fact?.title}
                </p>
              </div>
            )
          })}
        </div>
        <BlockContent
          className="w-full mx-auto text-1.5xl text-left mt-16 md:leading-tight text-aserto-grey-60 sm: md:mt-10 sm:text-2xl font-roboto"
          blocks={page.subtitleRaw}
        />
      </div>
    </section>
  )
}

export default Hero
