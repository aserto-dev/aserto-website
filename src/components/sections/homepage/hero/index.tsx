// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'
import { BlockContent } from 'components/primitives/block-content'
import { Player } from '@lottiefiles/react-lottie-player'

const Hero = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="md:bg-homepageHero md:pt-20 md:px-16 md:pb-32 pb-20 pt-8 md:mb-32 rounded-[40px]">
      <div className="flex md:flex-row flex-col gap-4 md:gap-8 lg:gap-20">
        <div className="max-w-[440px] mx-auto md:max-w-full md:mx-0 md:w-1/2">
          <h1
            className="text-center md:text-left text-transparent bg-clip-text bg-homepageTitle
            my-8 md:my-[20px] text-[28px] md:text-[30px] lg:text-[40px] xl:text-[48px]
            leading-[40px] lg:leading-[48px] xl:leading-[56px] font-bold font-roboto"
          >
            {page.tagline}
          </h1>
          <BlockContent
            className="text-[20px] text-center md:text-left text-aserto-grey-90
            font-bold font-roboto leading-[24px] -mb-4 my-4 md:my-0"
            blocks={page.subtaglineRaw}
          />
          <div className="hidden md:block">
            <CtaButtons signup seeDemo leftAlign />
          </div>
        </div>
        <div className="md:w-1/2">
          <Player
            autoplay
            background="transparent"
            speed={1}
            loop
            src="https://lottie.host/b64c3f96-5c5b-475b-a451-d9e91ba3f774/seOtSjXHtp.json"
            // style={{ height: '300px', width: '300px' }}
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
