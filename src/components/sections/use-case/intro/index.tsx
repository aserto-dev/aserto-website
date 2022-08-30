import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import { UseCaseFragment } from 'lib/sanity/generated'

const Intro = ({ page }: { page: UseCaseFragment }) => {
  return (
    <Container className="py-20 bg-aserto-lochivar-100 text-aserto-grey-90 text-center px-4 md:px-12">
      <BlockContent
        className="pb-20 px-4 md:px-12 text-[24px] lg:text-[30px] leading-8 lg:leading-10"
        blocks={page.introTitleRaw}
      />
      <div className="gap-8 text-left text-[20px]">
        <BlockContent
          className="align-top md:w-1/2 md:inline-block pb-20 px-4 md:px-12"
          blocks={page.introLeftTextRaw}
        />
        <BlockContent
          className="align-top md:w-1/2 md:inline-block pb-20 px-4 md:px-12"
          blocks={page.introRightTextRaw}
        />
      </div>
    </Container>
  )
}

export default Intro
