// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'
import IntroItem from './intro-item'
import Image from '../../../primitives/image'
import clsx from 'clsx'

// Components

const Intro = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="mt-10 lg:py-2" id="the-solution">
      <div className="mx-auto" ref={section}>
        {page.infos?.map((info, i) => {
          if (!info) return null
          return (
            <div
              id={`intro-${i + 1}`}
              key={info?.title}
              className={clsx(
                `flex mt-32 flex-wrap justify-center font-roboto`,
                {
                  'items-center sm:flex-col-reverse md:items-start lg:items-start md:flex-row-reverse lg:flex-row-reverse':
                    i === 1
                }
              )}
            >
              <div className="lg:w-80 md:w-56 w-52">
                <Image
                  src={String(info.imagePath)}
                  alt="value"
                  layout="responsive"
                />
              </div>
              <div
                className={`flex-1 mt-10 md:mt-auto lg:mt-auto ${
                  i !== 1 ? 'lg:ml-20 md:ml-20' : 'lg:mr-20 md:mr-20'
                }`}
                style={{
                  minWidth: 346
                }}
              >
                <h2
                  className="mb-2 tracking-tight text-aserto-grey-90 font-roboto"
                  style={{
                    fontSize: 32,
                    lineHeight: '36px'
                  }}
                >
                  {info.title}
                </h2>
                <h4 className="text-xl text-aserto-grey-90">{info.subtitle}</h4>
                <div className="mt-4 text-lg">
                  {info?.items?.map((item) => {
                    return (
                      <IntroItem
                        key={item?.title}
                        image={String(item?.image?.asset?.url)}
                        text={String(item?.title)}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Intro
