// Primitives
import { HomePageFragment } from 'lib/sanity/generated'
import Container from '../container'

const Animations = ({ page }: { page: HomePageFragment }) => {
  const scrollToIds = ['real', 'zero', 'granular']
  return (
    <Container className="sm:px-16 pt-8 font-roboto">
      <img
        className="hidden md:block absolute top-96 -left-28"
        src="images/translucent-aserto.png"
        alt="Aserto"
      />
      <div className="flex md:flex-row flex-col md:justify-evenly items-center gap-12 md:gap-0">
        {page?.animatedGifs?.length &&
          page.animatedGifs.map((g, i) => (
            <div
              key={i}
              className="xl:w-[360px] xl:h-[360px] lg:w-[272px] lg:h-[272px] md:w-[200px] md:h-[200px] w-60 h-60
              rounded-[40px] bg-gif p-1 text-center"
            >
              <div
                className="relative rounded-[40px] h-full bg-aserto-black p-4 hover:cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(
                    `value-prop-${scrollToIds[i]}`
                  )
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                }}
              >
                <img
                  className="absolute w-3/5 translate-x-1/4 translate-y-1/4"
                  src="images/translucent-aserto.png"
                  alt="Aserto"
                />
                <h3
                  className="text-xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8
                  text-transparent bg-clip-text bg-homepageTitle"
                >
                  {g?.title}
                </h3>
                <img
                  className="h-1/2 relative object-cover my-4"
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
          {page.demoTitle}
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
