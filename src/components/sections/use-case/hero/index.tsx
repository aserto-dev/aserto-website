import { BlockContent } from 'components/primitives/block-content'
import CtaButtons from 'components/sections/common/cta-buttons'
import Container from 'components/sections/homepage/container'
import { UseCaseFragment } from 'lib/sanity/generated'

const Hero = ({ page }: { page: UseCaseFragment }) => {
  return (
    <Container className="bg-resourceHero pt-8 lg:pt-[100px] flex flex-wrap gap-8">
      <div className="flex-col align-middle lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <h1
          className="my-[20px] mx-auto w-full text-[30px] leading-[45px]
          xl:text-[50px] xl:leading-[60px] text-aserto-grey-90"
        >
          {page.title}
        </h1>
        <BlockContent
          className="resource w-full mx-auto mt-16 text-aserto-grey-90 text-[22px] leading-8"
          blocks={page.subtitleRaw}
        />
        <CtaButtons signup seeDemo leftAlign />
      </div>
      <div className="flex-col align-middle lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <img
          className="md:w-[500px] mx-auto p-[20px] w-full"
          src={page.heroImage?.asset?.url ?? '/404'}
          alt={page.heroImage?.alt ?? 'ReBAC using Rego'}
        />
      </div>
    </Container>
  )
}

export default Hero
