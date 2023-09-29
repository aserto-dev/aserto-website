// Hooks
import Container from 'components/layout/container'
import { BlockContent } from 'components/primitives/block-content'
import { VideosPageFragment } from 'lib/sanity/generated'

const Hero = ({ page }: { page: VideosPageFragment }) => {
  return (
    <Container className="pt-8 sm:pt-[100px]">
      <h1
        className="my-[20px] mx-auto w-full xl:w-3/4 text-[30px] leading-[40px]
          sm:text-[50px] sm:leading-[60px] text-center text-aserto-grey-90"
      >
        {page.title}
      </h1>
      <BlockContent
        className="text-center text-aserto-grey-90 text-[24px] lg:text-[30px] leading-8 lg:leading-10 my-20"
        blocks={page.subtitleRaw}
      />
    </Container>
  )
}

export default Hero
