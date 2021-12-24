import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import { formatPostDate } from 'lib/util'
import Image from 'components/primitives/image'
import Link from 'next/link'
import { BlockContent } from 'components/primitives/block-content'

type Props = {
  data: CaseStudyMetaFragment
}

const CaseStudyItem = ({ data }: Props) => {
  return (
    <Link href={`/casestudies/${data.slug?.current}`}>
      <a className="flex flex-col overflow-hidden border rounded border-aserto-grey-10">
        <div className="bg-white px-5">
          <Image
            src={data.logo?.asset?.url || '/404'}
            alt="Company logo"
            width={384}
            height={150}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col justify-between flex-1 px-8 py-8 bg-aserto-black">
          <div className="flex-1">
            <BlockContent
              className="text-xl text-aserto-grey-90 sm:text-xl"
              blocks={data.titleRaw}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CaseStudyItem
