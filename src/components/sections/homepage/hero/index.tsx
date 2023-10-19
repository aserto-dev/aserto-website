// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="bg-homepageHero sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32 rounded-[40px]">
      <div className="flex sm:flex-row flex-col gap-20">
        <div>
          <h1
            className="sm:my-[20px] text-[30px] leading-[40px] sm:text-[48px] sm:leading-[56px]
            font-bold text-center sm:text-left text-transparent bg-clip-text bg-homepageTitle"
          >
            {title}
          </h1>
          <CtaButtons signup seeDemo leftAlign />
        </div>
        <img
          className="w-[350px] sm:w-[516px] mx-auto"
          src="images/homepage/Lottie.svg"
          alt="Lottie"
        />
      </div>
    </Container>
  )
}

export default Hero
