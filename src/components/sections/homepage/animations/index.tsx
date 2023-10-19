// Primitives
import Container from '../container'

const Animations = () => {
  return (
    <Container className="sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32">
      <div className="flex sm:flex-row flex-col gap-12">
        <div className="w-[400px] h-[360px] rounded-[4px] border-2 border-tealGradient"></div>
        <div className="w-[400px] h-[360px] rounded-[4px] border-2 border-tealGradient"></div>
        <div className="w-[400px] h-[360px] rounded-[4px] border-2 border-tealGradient"></div>
      </div>

      <div className="mt-20">
        <iframe
          className="w-full h-full mx-auto overflow-hidden md:w-[810px] md:h-[457px]"
          width="810"
          height="457"
          src={'https://www.youtube.com/embed/RJkgmdjJn_w'}
          title="Welcome to Modern Authorization | Aserto Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  )
}

export default Animations
