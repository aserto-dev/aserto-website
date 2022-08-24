import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FeatureBlock } from 'lib/sanity/generated'
import { BlockContent } from 'components/primitives/block-content'

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0
}

const FeatureBlockItem = ({
  titleRaw,
  subtitleRaw,
  element,
  image,
  carouselImages
}: FeatureBlock) => {
  const [caption, setCaption] = useState(carouselImages?.[0]?.captionRaw)
  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
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
              <div className="rego w-full sm:w-3/4 mx-auto">
                <Slider
                  {...settings}
                  afterChange={(e) =>
                    setCaption(carouselImages?.[e]?.captionRaw)
                  }
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
    </>
  )
}

export default FeatureBlockItem
