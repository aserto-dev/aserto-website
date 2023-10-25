// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'

const Animations = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="sm:pt-20 sm:px-16 sm:pb-64 pb-56 pt-8 mb-32">
      <div className="flex md:flex-row flex-col gap-12">
        <div className="rounded-[40px] bg-tealGradient p-1">
          <div className="w-[400px] h-[360px] rounded-[40px] bg-aserto-black"></div>
        </div>
        <div className="rounded-[40px] bg-tealGradient p-1">
          <div className="w-[400px] h-[360px] rounded-[40px] bg-aserto-black"></div>
        </div>
        <div className="rounded-[40px] bg-tealGradient p-1">
          <div className="w-[400px] h-[360px] rounded-[40px] bg-aserto-black"></div>
        </div>
      </div>

      <hr className="p-1 my-28 bg-hrGradient border-t-0" />

      <div className="mt-20">
        <iframe
          className="w-full h-full mx-auto overflow-hidden md:w-[810px] md:h-[457px]"
          width="810"
          height="457"
          src={page.demoUrl || 'https://www.youtube.com/embed/RJkgmdjJn_w'}
          title="Welcome to Modern Authorization | Aserto Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="p-1 my-28 bg-hrGradient border-t-0" />
    </Container>
  )
}

export default Animations
