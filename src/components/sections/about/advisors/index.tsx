// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'

// Components
import AdvisorItem from './advisor-item'

const Advisors = ({ page }: { page: AboutPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="p-0">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.angelsSectionTitle}
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            {page.angelsSectionSubtitle}
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 mx-auto mt-20 gap-y-12 sm:gap-12 sm:gap-y-20 lg:grid-cols-4">
          {page.angels?.map((angel, i) => (
            <AdvisorItem
              name={angel?.name ?? ''}
              linkedin={angel?.linkedIn ?? ''}
              position={angel?.position ?? ''}
              imageSrc={
                page.angelsWithImage
                  ? angel?.avatar?.asset?.url ?? undefined
                  : undefined
              }
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisors
