// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'
import { BlockContent } from 'components/primitives/block-content'

const Hero = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="md:bg-homepageHero md:pt-20 md:px-16 md:pb-64 pb-20 pt-8 md:mb-32 rounded-[40px]">
      <div className="flex md:flex-row flex-col gap-8 lg:gap-20">
        <div>
          <h1
            className="md:my-[20px] text-[30px] leading-[40px] md:text-[48px] md:leading-[56px]
            font-bold font-sf text-center md:text-left text-transparent bg-clip-text bg-homepageTitle"
          >
            {page.tagline}
          </h1>
          <BlockContent
            className="text-[20px] text-center md:text-left text-aserto-grey-90
            font-bold font-sf leading-[24px] -mb-4"
            blocks={page.subtaglineRaw}
          />
          <CtaButtons signup seeDemo leftAlign />
        </div>
        <img
          className="w-[350px] md:w-[516px] mx-auto"
          src={page.heroImage?.asset?.url || ''}
          alt={page.heroImage?.alt || ''}
        />
      </div>
    </Container>
  )
}

export default Hero
