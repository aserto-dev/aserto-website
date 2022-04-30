// import { BlockContent } from 'components/primitives/block-content'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialItem from './testimonial-item'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const page = {
    testimonials: [
      {
        authorName: 'David Kerber',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/David-Kerber.png'
          }
        },
        authorPosition: 'VP of Technology, Spreetail',
        companyImage: {
          asset: {
            url: 'images/testimonials/Spreetail-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`“Authorization involves really hard problems that I want experts to
              solve. We like to focus our internal engineering efforts on our customers
              and their problems. Aserto allows us to do just that, at a small fraction
              of the cost it would take to build and maintain it ourselves, not to
              mention the opportunity cost."`}
          </em>
        )
      },
      {
        authorName: 'Mathias Biilmann Christensen',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/Mathias-Biilmann-Christensen.png'
          }
        },
        authorPosition: 'Co-founder & CEO, Netlify',
        companyImage: {
          asset: {
            url: 'images/testimonials/Netlify-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`"As millions of developers and businesses are adopting a Jamstack approach,
              most modern web applications involve multiple APIs and services. Aserto's
              promise of separating policies from code could radically simplify the
              implementation of authorization across the front-end UI and the larger
              world of back-end functions and endpoints."`}
          </em>
        )
      },
      {
        authorName: 'Tom Preston-Werner',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/Tom-Preston-Werner.png'
          }
        },
        authorPosition: 'Co-founder, GitHub',
        companyImage: {
          asset: {
            url: 'images/testimonials/GitHub-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`"Building & managing an authorization/RBAC system is a huge pain, 
              especially at enterprise scale. So stop! Aserto has a distributed, 
              millisecond latency, 100% availability API for that. 
              I'm excited to help as an angel investor!"`}
          </em>
        )
      },
      {
        authorName: 'Sam Hall',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/Sam-Hall.png'
          }
        },
        authorPosition: 'Head of Technology, Metrikus',
        companyImage: {
          asset: {
            url: 'images/testimonials/Metrikus-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`“Authorization has been a constant worry over the last two
              years - everyone was scared of it. With Aserto, I'm so much more
              comfortable with authorization because I can see what's going on.
              Before, it was a dark art - we had a muddled permission structure.
              With Aserto, we have clear policies that are easy to implement and
              obvious to analyze. Aserto has made AuthZ something we're not
              scared of anymore.”`}
          </em>
        )
      },
      {
        authorName: 'James Lindenbaum',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/James-Lindenbaum.png'
          }
        },
        authorPosition: 'Founder, Heroku & Heavybit',
        companyImage: {
          asset: {
            url: 'images/testimonials/Heavybit-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`“A policy-centric authorization solution for developers is a glaring
              hole in the market, and there is no team on the planet better equipped
              to build it to enterprise-grade."`}
          </em>
        )
      },
      {
        authorName: 'Grant Miller',
        authorAvatar: {
          asset: {
            url: 'images/testimonials/Grant-Miller.png'
          }
        },
        authorPosition: 'Co-founder / CEO, Replicated',
        companyImage: {
          asset: {
            url: 'images/testimonials/Replicated-Logo.png'
          }
        },
        quoteRaw: (
          <em>
            {`"B2B SaaS vendors have a huge opportunity going after the enterprise,
            but only if they meet enterprise expectations, as we've captured in
            EnterpriseReady.io. Replicated serves 50% of the F100, and we know first-hand
            that authorization and RBAC are table-stakes for enterprise adoption. It's
            obvious to me that partnering with Aserto is a far better approach compared
            to rolling your own and having to reinvent the wheel."`}
          </em>
        )
      }
    ]
  }

  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <section className="mx-auto mt-20 lg:mt-0 md:mt-0 lg:pt-24 pb-20 lg:pb-28">
        <div className="mx-4">
          <Slider {...settings}>
            {page.testimonials?.map((testimonial, i) => {
              return (
                <TestimonialItem
                  key={String(testimonial?.authorName ?? i)}
                  companyInfo={testimonial?.authorPosition ?? ''}
                  companyImageSrc={
                    testimonial?.companyImage?.asset?.url ?? '/404'
                  }
                  profileImageSrc={
                    testimonial?.authorAvatar?.asset?.url ?? '/404'
                  }
                  profileName={testimonial?.authorName}
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
