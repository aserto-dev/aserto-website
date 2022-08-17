import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialItem from './testimonial-item'
import { Testimonial } from 'lib/sanity/generated'

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    mobileFirst: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1464,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <section className="mx-auto mt-10 lg:mt-0 md:mt-10 lg:pt-12 pb-20 lg:pb-28">
        <div>
          <Slider {...settings}>
            {testimonials?.map((testimonial, i) => {
              return (
                <TestimonialItem
                  key={String(testimonial?.name ?? i)}
                  companyInfo={testimonial?.position ?? ''}
                  companyImageSrc={testimonial?.logo?.asset?.url ?? '/404'}
                  profileImageSrc={testimonial?.picture?.asset?.url ?? '/404'}
                  profileName={String(testimonial?.name ?? '')}
                  quote={testimonial?.quoteRaw}
                />
              )
            })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Testimonials
