// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'

const Animations = ({ page }: { page: HomePageFragment }) => {
  return (
    <Container className="sm:px-16 pt-8 font-sf">
      <img
        className="absolute top-96 -left-28"
        src="images/translucent-aserto.png"
        alt="Aserto"
      />
      <div className="flex md:flex-row flex-col md:justify-center items-center gap-12">
        {page?.animatedGifs?.length &&
          page.animatedGifs.map((g, i) => (
            <div
              key={i}
              className="xl:w-96 xl:h-96 lg:w-72 lg:h-72 md:w-52 md:h-52 w-60 h-60
              rounded-[40px] bg-gif p-1 text-center"
            >
              <div className="rounded-[40px] h-full bg-aserto-black p-4">
                <h3 className="text-xl lg:text-3xl xl:text-5xl font-bold text-aserto-grey-90">
                  {g?.title}
                </h3>
                <img
                  className="rounded-[40px] h-1/2 object-cover my-4"
                  src={g?.image?.asset?.url || ''}
                  alt={g?.image?.alt || ''}
                />
                <h4
                  className="text-sm lg:text-xl xl:text-2xl font-semibold text-aserto-grey-90
                  mt-8 md:mt-4 xl:mt-12 whitespace-nowrap"
                >
                  {g?.description}
                </h4>
              </div>
            </div>
          ))}
      </div>

      <hr className="p-1 my-28 bg-hrGradient border-t-0" />

      <div className="mt-20 flex flex-col items-center">
        <p
          className="text-[20px] lg:text-[24px] text-center text-aserto-grey-90
            font-bold leading-[28px] mb-4"
        >
          Watch a 3-minute demo
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
