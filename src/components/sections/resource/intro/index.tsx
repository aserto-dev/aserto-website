import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import { ResourceFragment } from 'lib/sanity/generated'

const Intro = ({ page }: { page: ResourceFragment }) => {
  return (
    <Container className="bg-resourceIntro text-aserto-grey-90 py-48 lg:pt-20">
      {(page.introTitleRaw || page.introSubtitleRaw) && (
        <div className="pb-20 sm:px-8 lg:px-12 text-left lg:text-center">
          {page.introTitleRaw && (
            <BlockContent
              className="my-[20px] mx-auto w-full text-[30px] leading-[45px]"
              blocks={page.introTitleRaw}
            />
          )}
          {page.introSubtitleRaw && (
            <BlockContent
              className="w-full mx-auto mt-12 text-[22px] leading-8"
              blocks={page.introSubtitleRaw}
            />
          )}
        </div>
      )}
      {page.introImage?.asset?.url && (
        <picture>
          <img
            className="object-scale-down mx-auto mt-8"
            src={page.introImage?.asset?.url ?? '/404'}
            alt={
              page.introImage?.alt ??
              'Policy Based Access Management KuppingerCole'
            }
          />
        </picture>
      )}
      {page.introCaptionRaw && (
        <div className="sm:px-8 lg:px-12 text-left lg:text-center">
          <BlockContent
            className="w-full md:w-3/4 mx-auto mt-12 text-[30px] leading-[45px]"
            blocks={page.introCaptionRaw}
          />
        </div>
      )}
    </Container>
  )
}

export default Intro
