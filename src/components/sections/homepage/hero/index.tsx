// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'
import { BlockContent } from 'components/primitives/block-content'

const Hero = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="bg-homepageHero sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32 rounded-[40px]">
      <div className="flex sm:flex-row flex-col gap-20">
        <div>
          <h1
            className="sm:my-[20px] text-[30px] leading-[40px] sm:text-[48px] sm:leading-[56px]
            font-bold font-sf text-center sm:text-left text-transparent bg-clip-text bg-homepageTitle"
          >
            {page.tagline}
          </h1>
          <BlockContent
            className="text-[16px] lg:text-[20px] text-left text-aserto-grey-90
            font-bold font-sf leading-[24px] -mb-4"
            blocks={page.subtaglineRaw}
            spaced
          />
          <CtaButtons signup seeDemo leftAlign />
        </div>
        <img
          className="w-[350px] sm:w-[516px] mx-auto"
          src={page.heroImage?.asset?.url || ''}
          alt={page.heroImage?.alt || ''}
        />
      </div>
    </Container>
  )
}

export default Hero
