// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'
import { BlockContent } from 'components/primitives/block-content'

const Hero = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="md:bg-homepageHero md:pt-20 md:px-16 md:pb-56 pb-20 pt-8 md:mb-32 rounded-[40px]">
      <div className="flex md:flex-row flex-col gap-8 lg:gap-20">
        <div className="md:w-1/2">
          <h1
            className="md:my-[20px] text-[30px] leading-[40px] lg:text-[48px] lg:leading-[56px]
            font-bold font-sf text-center md:text-left text-transparent bg-clip-text bg-homepageTitle"
          >
            {page.tagline}
          </h1>
          <BlockContent
            className="text-[20px] text-center md:text-left text-aserto-grey-90
            font-bold font-sf leading-[24px] -mb-4"
            blocks={page.subtaglineRaw}
          />
          <div className="hidden md:block">
            <CtaButtons signup seeDemo leftAlign />
          </div>
        </div>
        <div className="md:w-1/2 mt-16 md:mt-0">
          <img
            className="w-2/3 md:w-full md:max-w-sm h-auto mx-auto"
            src={page.heroImage?.asset?.url || ''}
            alt={page.heroImage?.alt || ''}
          />
        </div>
        <div className="block md:hidden">
          <CtaButtons signup seeDemo leftAlign />
        </div>
      </div>
    </Container>
  )
}

export default Hero
