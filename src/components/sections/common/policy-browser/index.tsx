import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CodeViewer from 'components/sections/common/code-viewer'
import React from 'react'

const settings = {
  dots: true,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
}

const regoPolicies = [
  {
    caption: 'Use any user-centric attributes in your policies',
    code: `allowed {
  input.user.department == "Sales"
}`
  },
  {
    caption: 'Make access decisions based on org-chart relationships',
    code: `allowed {
  dir.is_manager_of(input.user.id, input.resource.id)
}`
  },
  {
    caption:
      'Model your resource hierarchy and enforce fine-grained authorization',
    code: `allowed {
  ds.check(input.user.id, "viewer", input.resource.id)
}`
  },
  {
    caption: 'Include environmental attributes in your policies',
    code: `allowed {
  ns := time.now_ns()
  day := time.weekday(ns)
  day == data.workdays[_]
}`
  }
]

const CodeBrowser = () => {
  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <div className="relative px-0 md:px-12 mb-24 border-2 border-aserto-lochivar-100 rounded-[4px]">
        <div className="w-full md:w-[620px]">
          {/* <CodeViewer language="rego" snippet={regoPolicies[0].code} /> */}
          <Slider {...settings}>
            {regoPolicies?.map((r, i) => {
              return (
                <React.Fragment key={i}>
                  <CodeViewer
                    language="rego"
                    snippet={r.code}
                    className="w-full md:w-[600px] h-[200px] border-0 rounded-none my-0"
                  />
                  <div className="w-full sm:w-[600px] h-[50px] leading-[50px] text-center bg-aserto-grey-10">
                    {r.caption}
                  </div>
                </React.Fragment>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CodeBrowser
