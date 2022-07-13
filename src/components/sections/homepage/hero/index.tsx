// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="bg-hero sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32">
      <h1
        className="sm:my-[20px] sm:w-1/2 text-[36px] leading-[45px]
        sm:text-[60px] sm:leading-[70px] text-center sm:text-left text-aserto-grey-90"
      >
        {title}
      </h1>
      <CtaButtons signup contactEngineer leftAlign />
      <img
        className="object-cover h-[250px] -mx-8 -bottom-12 absolute
        sm:object-fill sm:h-auto sm:-ml-32 sm:left-1/2 sm:transform sm:-translate-x-1/2"
        src="images/homepage/seafloor.svg"
        alt="Sea Floor"
      />
      <img
        className="w-[350px] -mr-16 absolute -bottom-20 right-1/2 transform translate-x-1/2
        sm:w-[600px] sm:-mr-64 md:-mr-96 sm:-bottom-28"
        src="images/homepage/Lottie.svg"
        alt="Lottie"
      />
      <img
        className="md:block hidden -mr-40 absolute right-1/2 bottom-0 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[30px] -mr-20 absolute right-1/2 bottom-24 transform translate-x-1/2
        sm:w-[55px] sm:-mr-12 sm:bottom-16"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[40px] -mr-16 absolute right-1/2 bottom-36 transform translate-x-1/2
        sm:w-[65px] sm:-mr-8 sm:bottom-36"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="sm:w-[75px] sm:mr-24 w-[52px] absolute right-1/2 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
    </Container>
  )
}

export default Hero
