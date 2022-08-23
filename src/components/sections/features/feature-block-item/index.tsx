import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BlockContent } from 'components/primitives/block-content'
import { FeatureBlock } from 'lib/sanity/generated'
import Container from 'components/sections/homepage/container'

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
  carouselImages,
  carouselCaptionRaw
}: FeatureBlock) => {
  return (
    <Container>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <div className="relative justify-center text-center text-aserto-grey-90">
        <div className="w-3/4 mx-auto">
          <BlockContent
            className="text-[24px] lg:text-[30px] leading-8 lg:leading-10"
            blocks={titleRaw}
          />
          {!!subtitleRaw && (
            <BlockContent
              className={`text-[18px] lg:text-[20px] mt-8`}
              blocks={subtitleRaw}
              spaced
            />
          )}
        </div>
        {element === 'Image/gif' && (
          <img
            className="object-scale-down mx-auto"
            src={image?.asset?.url ?? '/404'}
            alt={image?.alt ?? 'value prop image'}
          />
        )}
        {element === 'Carousel' && (
          <>
            <div className="relative px-0 my-24 mx-auto">
              <div className="rego w-3/4 mx-auto">
                <Slider {...settings}>
                  {carouselImages?.map((c, i) => {
                    return (
                      <img
                        key={i}
                        src={c?.asset?.url ?? '/404'}
                        alt={c?.alt ?? 'value prop image'}
                      />
                    )
                  })}
                </Slider>
              </div>
            </div>
            <BlockContent
              className={`text-[18px] lg:text-[20px] w-3/4 mx-auto mt-8`}
              blocks={carouselCaptionRaw}
              spaced
            />
          </>
        )}
      </div>
    </Container>
  )
}

export default FeatureBlockItem
