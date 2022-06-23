import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import Link from 'next/link'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: CaseStudyMetaFragment
}

const CaseStudyItem = ({ data }: Props) => {
  return (
    <Link href={`/customers/${data.slug?.current}`}>
      <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10 cursor-pointer">
        <div className="bg-white px-5 rounded">
          <Image
            src={data.logo?.asset?.url || '/404'}
            alt="Company logo"
            width={384}
            height={150}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col justify-between flex-1 px-8 py-8 bg-aserto-grey-20">
          <div className="flex-1">
            <BlockContent
              className="text-xl text-aserto-grey-90 sm:text-xl"
              blocks={data.titleRaw}
            />
          </div>

          <div className="text-aserto-lochivar-accent-40 mt-10 text-xl">
            <a className="hover:underline">View case study</a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CaseStudyItem
