import { BlockContent } from 'components/primitives/block-content'
import Button from 'components/primitives/button'
import Container from 'components/sections/homepage/container'
import { SolutionFragment } from 'lib/sanity/generated'
import Video from '../video'

const Hero = ({ page }: { page: SolutionFragment }) => {
  return (
    <Container className="bg-resourceHero pt-8 lg:pt-[100px] pb-48 flex flex-wrap gap-8">
      <div className="flex-col align-middle lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <h1
          className="my-[20px] mx-auto w-full text-[30px] leading-[40px]
          xl:text-[50px] xl:leading-[60px] text-aserto-grey-90"
        >
          {page.title}
        </h1>
        <BlockContent
          className="resource w-full mx-auto mt-12 text-aserto-grey-90 text-[22px] leading-8"
          blocks={page.subtitleRaw}
        />
        {!!page.formId && (
          <Button
            variant="primary"
            size="sm"
            as="a"
            className="mt-20 inline-flex items-center justify-center self-center cursor-pointer"
            onClick={() => {
              const element = document.getElementById('resource')
              element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            {page.formTitle}
          </Button>
        )}
      </div>
      <div className="flex-col align-middle lg:w-1/2 lg:inline-flex pb-20 sm:px-8 lg:px-12">
        <img
          className="md:w-[500px] mx-auto p-[20px] w-full"
          src={page.heroImage?.asset?.url ?? '/404'}
          alt={page.heroImage?.alt ?? 'ReBAC using Rego'}
        />
      </div>
      {page.videoItem?.embedUrl && <Video page={page} />}
    </Container>
  )
}

export default Hero
