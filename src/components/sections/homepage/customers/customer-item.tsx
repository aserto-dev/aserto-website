// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import Link from 'next/link'
import { BlockContent } from 'components/primitives/block-content'

import s from './customers.module.css'
import clsx from 'clsx'

type Props = {
  data: CaseStudyMetaFragment
}

const CustomerSpotlightItem = ({ data }: Props) => {
  const [section] = useFadeInBottom()
  return (
    <div className="relative">
      <div
        className="relative z-10 w-full mx-auto bg-aserto-black"
        ref={section}
      >
        <Link href={`/casestudies/${data.slug?.current}`}>
          <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
            {data.slug?.current ? 
              <div className="bg-white p-5 rounded">
                <Image
                  src={data.logo?.asset?.url || '/404'}
                  alt="Company logo"
                  width={1500}
                  height={150}
                  objectFit="contain"
                  layout="responsive"
                /> 
              </div> :
              <div className={clsx('text-3xl text-white flex items-center', s['final-card'])}>
                <span className="w-full text-center text-aserto-grey-90">All case studies</span>
              </div>
            }
            <div className="relative flex flex-col justify-between flex-1 px-8 py-8 bg-aserto-grey-20">
              <div className="flex-1">
                <BlockContent
                  className="text-center text-xl text-aserto-grey-90 sm:text-xl"
                  blocks={data.titleRaw}
                />
              </div>

              <div className="text-center text-aserto-lochivar-accent-40 mt-10 text-xl">
                <a className="hover:underline">
                  {data.slug?.current ? 'View case study' : 'View all case studies'}
                </a>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CustomerSpotlightItem