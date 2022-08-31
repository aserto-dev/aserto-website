// Primitives
import Container from '../container'
import CtaButtons from 'components/sections/common/cta-buttons'

const Hero = ({ title }: { title: string }) => {
  return (
    <Container className="bg-hero sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32">
      <h1
        className="sm:my-[20px] sm:w-full md:w-3/4 lg:w-7/12 text-[30px] leading-[40px]
        sm:text-[50px] sm:leading-[60px] text-center sm:text-left text-aserto-grey-90"
      >
        {title}
      </h1>
      <img
        className="object-cover h-[250px] -mx-8 -bottom-12 absolute
        sm:object-fill sm:h-auto sm:-ml-32 sm:left-1/2 sm:transform sm:-translate-x-1/2"
        src="images/homepage/seafloor.svg"
        alt="Sea Floor"
      />
      <img
        className="w-[350px] -mr-16 absolute -bottom-20 right-1/2 transform translate-x-1/2
        sm:w-[600px] sm:-bottom-28 sm:-mr-52 lg:-mr-96"
        src="images/homepage/Lottie.svg"
        alt="Lottie"
      />
      <img
        className="lg:block hidden -mr-40 absolute right-1/2 -bottom-4 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[30px] -mr-20 absolute right-1/2 bottom-20 transform translate-x-1/2
        sm:w-[55px] sm:-mr-12 sm:bottom-12"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="w-[40px] -mr-16 absolute right-1/2 bottom-32 transform translate-x-1/2
        sm:w-[65px] sm:-m-4"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <img
        className="sm:w-[75px] sm:mr-28 bottom-40 w-[52px] absolute right-1/2 transform translate-x-1/2"
        src="images/homepage/bubble.svg"
        alt="Bubble"
      />
      <CtaButtons signup seeDemo leftAlign />
    </Container>
  )
}

export default Hero
