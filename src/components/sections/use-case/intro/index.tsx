import { BlockContent } from 'components/primitives/block-content'
import Container from 'components/sections/homepage/container'
import { UseCaseFragment } from 'lib/sanity/generated'

const Intro = ({ page }: { page: UseCaseFragment }) => {
  return (
    <Container className="py-20 bg-aserto-lochivar-100 text-aserto-grey-90 text-center px-4 md:px-12">
      <img
        className="object-cover h-[100px] absolute -bottom-12 -ml-4
        md:-ml-12 lg:-ml-32 lg:object-fill lg:h-auto"
        src="/images/use-cases/seafloor-bottom.svg"
        alt="Dark Sea Floor"
      />
      <img
        className="object-cover h-[100px] absolute -top-20 -ml-4
        lg:pt-[10px] xl:pt-0 lg:-top-32 2xl:-top-44 lg:object-fill lg:h-auto"
        src="/images/use-cases/seafloor-top.svg"
        alt="Dark Sea Floor"
      />
      <img
        className="w-[350px] absolute -top-40 left-1/2 transform -translate-x-1/2
        lg:w-[450px] lg:-top-52"
        src="/images/use-cases/lottie-with-shadow.svg"
        alt="Lottie"
      />
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
