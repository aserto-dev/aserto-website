// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'

const Animations = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="sm:pt-20 sm:px-16 pt-8">
      <img
        className="absolute top-96 left-0"
        src="images/translucent-aserto.svg"
        alt="Aserto"
      />
      <div className="flex md:flex-row flex-col md:justify-center items-center gap-12">
        {page?.animatedGifs?.length &&
          page.animatedGifs.map((g, i) => (
            <div
              key={i}
              className="xl:w-96 xl:h-96 lg:w-72 lg:h-72 md:w-52 md:h-52 w-60 h-60
              rounded-[40px] bg-gif p-1"
            >
              <div className="rounded-[40px] h-full bg-aserto-black">
                <img
                  className="rounded-[40px] h-full object-cover"
                  src={g?.asset?.url || ''}
                  alt={g?.alt || ''}
                />
              </div>
            </div>
          ))}
      </div>

      <hr className="p-1 my-28 bg-hrGradient border-t-0" />

      <div className="mt-20 flex flex-col items-center">
        <p
          className="text-[20px] lg:text-[24px] text-center text-aserto-grey-90
            font-bold font-sf leading-[28px] mb-4"
        >
          Watch a demo in 3 minutes
        </p>
        <div>
          <iframe
            className="w-full h-full mx-auto overflow-hidden md:w-[680px] md:h-[408px] lg:w-[810px] lg:h-[457px]"
            width="810"
            height="457"
            src={page.demoUrl || 'https://www.youtube.com/embed/RJkgmdjJn_w'}
            title="Welcome to Modern Authorization | Aserto Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <hr className="p-1 my-28 bg-hrGradient border-t-0" />
    </Container>
  )
}

export default Animations
