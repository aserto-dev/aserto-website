import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CodeViewer from 'components/sections/common/code-viewer'
import React from 'react'

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  mobileFirst: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000
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
  ds.check_permission({
    "sub_id": input.user.id,
    "obj_type": "document",
    "permission": "read",
    "obj_id": input.resource.id
  })
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

const PolicyBrowser = () => {
  return (
    <>
      <link rel="stylesheet" href="/css/carousel.css"></link>
      <link rel="stylesheet" href="/css/code-carousel.css"></link>
      <div className="relative px-0 mb-24 border-2 border-aserto-lochivar-100 rounded-[4px]">
        <div className="rego w-full md:w-[600px]">
          <Slider {...settings}>
            {regoPolicies?.map((r, i) => {
              return (
                <div key={i} className="flex flex-col h-[280px]">
                  <CodeViewer
                    language="rego"
                    snippet={r.code}
                    className="w-full flex-auto md:w-[600px] h-[210px] border-0 rounded-none my-0"
                  />
                  <div className="w-full flex-1 md:w-[600px] h-full text-center my-auto items-center bg-aserto-grey-10 p-4">
                    <span>{r.caption}</span>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default PolicyBrowser
