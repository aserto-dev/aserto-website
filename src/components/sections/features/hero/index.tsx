import { BlockContent } from 'components/primitives/block-content'
import Button from 'components/primitives/button'
import Container from 'components/sections/homepage/container'
import {
  FeatureBlockFragment,
  FeaturesPageFragment
} from 'lib/sanity/generated'

const Hero = ({ page }: { page: FeaturesPageFragment }) => {
  const heroFeatures: FeatureBlockFragment[] =
    page.heroFeatureBlocks as FeatureBlockFragment[]
  return (
    <Container className="pt-[100px] text-center">
      <h1
        className="my-[20px] mx-auto w-full xl:w-3/4 text-[30px] leading-[45px]
          sm:text-[50px] sm:leading-[60px] text-aserto-grey-90"
      >
        {page.title}
      </h1>
      <BlockContent
        className="w-full mx-auto mt-16 text-aserto-grey-90 text-[24px] lg:text-[30px] leading-8 lg:leading-10 lg:w-10/12 font-roboto"
        blocks={page.subtitleRaw}
      />
      <Button
        variant="primary"
        size="lg"
        as="a"
        className="inline-flex items-center justify-center self-center cursor-pointer my-16"
        href="/see-demo"
      >
        See a demo
      </Button>
      {heroFeatures.map((hf, i) => (
        <div key={i}>
          {hf.element === 'Image/gif' && (
            <>
              <BlockContent blocks={hf.titleRaw} />
              <BlockContent blocks={hf.subtitleRaw} />
              <img
                src={hf.image?.asset?.url ?? '/404'}
                alt={hf.image?.alt ?? 'feature'}
              />
            </>
          )}
        </div>
      ))}
    </Container>
  )
}

export default Hero
