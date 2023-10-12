import { ButtonHTMLAttributes, ClassAttributes, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FeatureBlock } from 'lib/sanity/generated'
import { BlockContent } from 'components/primitives/block-content'
import CodeBrowser from 'components/sections/common/code-browser'
import PolicyBrowser from 'components/sections/common/policy-browser'
import AsertoInAction from 'components/sections/homepage/aserto-in-action'

const settings = {
  dots: true,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0
}

type FeatureBlockType = FeatureBlock & { direction: string }

const FeatureBlockItem = ({
  titleRaw,
  subtitleRaw,
  element,
  image,
  carouselImages,
  direction
}: FeatureBlockType) => {
  const [caption, setCaption] = useState(carouselImages?.[0]?.captionRaw)
  const dirStyle = direction === 'left' ? 'xl:order-2' : ''

  const PrevArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLButtonElement> &
      ButtonHTMLAttributes<HTMLButtonElement>
  ) => {
    const { className, onClick } = props
    return (
      <button className={className} onClick={onClick}>
        <img src="images/carousel-arrow-left.svg" />
      </button>
    )
  }

  const NextArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLButtonElement> &
      ButtonHTMLAttributes<HTMLButtonElement>
  ) => {
    const { className, onClick } = props
    return (
      <button className={className} onClick={onClick}>
        <img src="images/carousel-arrow-right.svg" />
      </button>
    )
  }

  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
        {/* {!!glow && <Glow direction={direction ?? 'left'} />} */}
        <div
          className={`text-center xl:text-left text-[20px] ${dirStyle} flex items-center`}
        >
          <div className="sm:w-9/12 xl:w-[430px] mx-auto">
            {!!titleRaw && (
              <BlockContent
                className="text-[24px] lg:text-[30px] leading-8 lg:leading-10"
                blocks={titleRaw}
                spaced
              />
            )}
            {!!subtitleRaw && (
              <BlockContent
                className={`text-[18px] lg:text-[20px] xl:w-[430px] text-left xl:text-left mt-8`}
                blocks={subtitleRaw}
                spaced
              />
            )}
          </div>
        </div>
        <div className="relative md:flex md:flex-row md:justify-center">
          {element === 'CodeBrowser' && <CodeBrowser />}
          {element === 'PolicyBrowser' && <PolicyBrowser />}
          {element === 'Animation' && (
            <div className="hidden md:block md:w-[700px]">
              <AsertoInAction />
            </div>
          )}
          {image?.asset?.url && (
            <img
              className="object-scale-down mx-auto"
              src={image?.asset?.url ?? '/404'}
              alt={image?.alt ?? 'value prop image'}
            />
          )}
          {element === 'Image/gif' && (
            <img
              className="w-full sm:w-3/4 object-scale-down mx-auto"
              src={image?.asset?.url ?? '/404'}
              alt={image?.alt ?? 'value prop image'}
            />
          )}
          {element === 'Carousel' && (
            <>
              <div className="relative px-0 my-12 mx-auto">
                <div className="rego custom-arrows w-full sm:w-3/4 mx-auto">
                  <Slider
                    {...settings}
                    afterChange={(e) =>
                      setCaption(carouselImages?.[e]?.captionRaw)
                    }
                    prevArrow={<PrevArrow />}
                    nextArrow={<NextArrow />}
                  >
                    {carouselImages?.map((c, i) => {
                      return (
                        <img
                          key={i}
                          className="object-scale-down mx-auto"
                          src={c?.asset?.url ?? '/404'}
                          alt={c?.alt ?? 'value prop image'}
                        />
                      )
                    })}
                  </Slider>
                </div>
              </div>
              {!!caption && (
                <BlockContent
                  className="text-[18px] lg:text-[20px] px-4 sm:w-3/4 sm:mx-auto text-aserto-grey-70"
                  blocks={caption}
                  spaced
                />
              )}
            </>
          )}
        </div>
      </div>
      {/* <link rel="stylesheet" href="/css/carousel.css"></link>
      <div className="relative justify-center text-left py-24 text-aserto-grey-90">
        <div className="w-full sm:w-3/4 sm:text-center sm:mx-auto px-4 mb-4">
          <BlockContent
            className="w-full sm:w-3/4 mx-auto text-[24px] lg:text-[30px] leading-8 lg:leading-10"
            blocks={titleRaw}
          />
          {!!subtitleRaw && (
            <BlockContent
              className="w-full sm:w-3/4 text-[18px] lg:text-[20px] mt-8 mx-auto"
              blocks={subtitleRaw}
              spaced
            />
          )}
        </div>
        {element === 'Image/gif' && (
          <img
            className="w-full sm:w-3/4 object-scale-down mx-auto"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        )}
        {element === 'Carousel' && (
          <>
            <div className="relative px-0 my-12 mx-auto">
              <div className="rego custom-arrows w-full sm:w-3/4 mx-auto">
                <Slider
                  {...settings}
                  afterChange={(e) =>
                    setCaption(carouselImages?.[e]?.captionRaw)
                  }
                  prevArrow={<PrevArrow />}
                  nextArrow={<NextArrow />}
                >
                  {carouselImages?.map((c, i) => {
                    return (
                      <img
                        key={i}
                        className="object-scale-down mx-auto"
                        src={c?.asset?.url ?? '/404'}
                        alt={c?.alt ?? 'value prop image'}
                      />
                    )
                  })}
                </Slider>
              </div>
            </div>
            {!!caption && (
              <BlockContent
                className="text-[18px] lg:text-[20px] px-4 sm:w-3/4 sm:mx-auto text-aserto-grey-70"
                blocks={caption}
                spaced
              />
            )}
          </>
        )}
      </div> */}
    </>
  )
}

export default FeatureBlockItem
