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

type FeatureBlockType = FeatureBlock & { direction?: 'left' | 'right' }

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

  const displayMedia = (element: FeatureBlock['element']) => {
    switch (element) {
      case 'CodeBrowser':
        return <CodeBrowser />
      case 'PolicyBrowser':
        return <PolicyBrowser />
      case 'Animation':
        return (
          <div className="hidden md:block md:w-[700px]">
            <AsertoInAction />
          </div>
        )
      case 'Image/gif':
        return (
          <img
            className="object-scale-down mx-auto"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        )
      case 'Carousel':
        return (
          <>
            <div
              className={`relative px-0 mb-12 ${
                direction && 'xl:my-12'
              } border border-aserto-lochivar-100 rounded-[4px]`}
            >
              <div className="rego custom-arrows w-full max-w-[100vw] mx-auto">
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
                        className="object-scale-down mx-auto rounded-[4px]"
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
                className="text-[18px] lg:text-[20px] text-left w-full px-4 sm:mx-auto text-aserto-grey-70"
                blocks={caption}
                spaced
              />
            )}
          </>
        )
      default:
        return
    }
  }

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
      <div
        className={`relative flex flex-col ${
          direction && 'xl:flex-row'
        } justify-evenly mb-20 xl:mt-20 xl:mb-40 text-aserto-grey-90`}
      >
        <div
          className={`text-center ${
            direction && 'xl:text-left xl:items-start'
          } text-[20px] ${dirStyle} flex items-center py-20`}
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
                className={`text-left text-[18px] lg:text-[20px] xl:w-[430px] mt-8`}
                blocks={subtitleRaw}
                spaced
              />
            )}
          </div>
        </div>
        <div
          className={`relative flex flex-col ${
            direction && 'md:items-center'
          } justify-center w-full mx-auto xl:w-7/12`}
        >
          {displayMedia(element)}
        </div>
      </div>
    </>
  )
}

export default FeatureBlockItem
