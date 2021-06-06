import { BlockContent } from 'components/primitives/block-content'
import { HomePageFragment } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import s from './testimonials.module.css'

const Testimonials = ({ page }: { page: HomePageFragment }) => {
  return (
    <section className="mx-auto sm:pt-24 pb-20 sm:pb-28">
      <div className="px-4 text-center mb-10 sm:px-0">
        <h2 className="text-4xl tracking-tight text-aserto-grey-90">
          {page.testimonialsSectionTitle}
        </h2>
      </div>
      <div
        className={`grid lg:grid-flow-col md:grid-flow-col lg:grid-cols-3 md:grid-cols-3 gap-4 ${s['testimonial-grid']}`}
      >
        {page.testimonials?.map((testimonial, i) => {
          return (
            <div
              key={String(testimonial?.authorName ?? i)}
              className={`bg-aserto-grey-5 border-aserto-grey-20 flex-1 min-h-96 p-4 flex flex-col items-center rounded border text-aserto-grey-90 ${s['testimonial-card']}`}
            >
              <Image
                className="rounded-full"
                layout="native"
                width={160}
                height={160}
                src={testimonial?.authorAvatar?.asset?.url ?? ''}
              />
              <div className="text-aserto-grey-90 font-bold text-lg mt-4">
                {testimonial?.authorName}
              </div>
              <div>{testimonial?.authorPosition}</div>
              <BlockContent
                className="mt-10 px-2"
                blocks={testimonial?.quoteRaw}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
