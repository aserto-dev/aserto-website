// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Image from 'components/primitives/image'
import { AboutPageFragment } from 'lib/sanity/generated'

// Styles
import s from './hero.module.css'
import { BlockContent } from 'components/primitives/block-content'

const Hero = ({ page }: { page: AboutPageFragment }) => {
  const [ref] = useFadeInBottom()

  return (
    <section className={`mx-auto pb-20 sm:pb-28 ${s.background}`}>
      <div className={s.background}>
        <Image
          src="/images/about/background2.png"
          width={1440}
          height={1068}
          objectFit="cover"
        />
      </div>
      <div className={`relative z-10 pt-3 text-center ${s.content}`} ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl mb-14 sm:mb-0">
          {page.title}
        </h1>
        <BlockContent
          className="w-full mx-auto mt-5 text-base text-left md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl lg:w-10/12 font-roboto"
          blocks={page.subtitleRaw}
        />
      </div>
    </section>
  )
}

export default Hero
