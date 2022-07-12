// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="bg-hero pt-20 pb-64 px-16 mb-32">
      <h1 className="my-[20px] w-1/2 text-[60px] leading-[70px] text-aserto-grey-90">
        {title}
      </h1>
      <CtaButtons signup contactEngineer leftAlign />
      <img
        className="-ml-32 absolute -bottom-12 left-1/2 transform -translate-x-1/2"
        src="images/homepage/seafloor.svg"
        alt="Sea Floor"
      />
      <img
        className="w-[600px] -mr-96 absolute -bottom-20 right-1/2 transform translate-x-1/2"
        src="images/homepage/Lottie.svg"
        alt="Lottie"
      />
      <img
        className="-mr-40 absolute right-1/2 bottom-0 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[55px] -mr-12 absolute right-1/2 bottom-16 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[65px] -mr-8 absolute right-1/2 bottom-36 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[75px] mr-24 absolute right-1/2 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
    </Container>
  )
}

export default Hero
