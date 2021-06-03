// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'

// Components
import Image from '../../../primitives/image'

const Founders = ({ page }: { page: AboutPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-8 mb-36 sm:mb-56 lg:py-12">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.foundersSectionTitle}
          </h2>
          <p className="max-w-[800px] mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto">
            {page.foundersSectionSubtitle}
          </p>
        </div>
        <div className="flex mt-12">
          <Image
            layout="native"
            width={304}
            height={389}
            src="/images/about/gert-omri.jpg"
          />
          {/*<div className="flex-1 ml-10">leke</div>*/}
        </div>
        {/*<div className="grid gap-8 mx-auto mt-20 lg:grid-cols-2">*/}
        {/*  {page.founders?.map((founder, i) => (*/}
        {/*    <FounderItem*/}
        {/*      name={founder?.name ?? ''}*/}
        {/*      position={founder?.position ?? ''}*/}
        {/*      image={founder?.avatar?.asset?.url ?? ''}*/}
        {/*      linkedin={founder?.linkedIn ?? ''}*/}
        {/*      key={i}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default Founders
