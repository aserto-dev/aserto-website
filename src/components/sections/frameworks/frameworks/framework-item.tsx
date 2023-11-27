import { FrameworkPageMetaFragment } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import Link from 'next/link'

type Props = {
  data: FrameworkPageMetaFragment
}

const FrameworkPageItem = ({ data }: Props) => {
  return (
    <Link href={`/frameworks/${data.slug?.current}`} legacyBehavior>
      <div className="flex flex-col overflow-hidden border rounded border-aserto-grey-10 cursor-pointer">
        <div className="bg-aserto-grey-5 p-5 rounded">
          <Image
            src={`/images/languages/${
              data.framework?.framework?.codename ?? 'js'
            }.svg`}
            alt="Language logo"
            width={795}
            height={400}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col justify-between flex-1 px-8 py-8 bg-aserto-grey-20">
          <div className="flex-1">
            <h4 className="text-xl text-aserto-grey-90 sm:text-xl">
              {data.title}
            </h4>
          </div>

          <div className="text-aserto-lochivar-accent-40 mt-10 text-xl">
            <a className="hover:underline">
              View framework integration for{' '}
              {data.framework?.framework?.title ?? 'Node.js'}
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FrameworkPageItem
