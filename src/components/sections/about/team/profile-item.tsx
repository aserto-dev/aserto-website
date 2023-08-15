import { BlockContent } from 'components/primitives/block-content'
import Image from 'components/primitives/image'

// Primitives
//import Link from 'components/primitives/link'

// Icons
//import LinkedinIcon from 'icons/linkedin-bio.svg'
import { MemberFragment } from 'lib/sanity/generated'

type Props = {
  data: MemberFragment
  withImage: boolean
}

const ProfileItem = ({ data, withImage }: Props) => (
  <a href={data.linkedIn ?? '/careers#open-positions'}>
    <div className="flex flex-col items-center text-center">
      {withImage && (
        <div className="flex overflow-hidden w-[100px] rounded-full">
          <Image
            className="object-cover"
            src={data.avatar?.asset?.url ?? ''}
            alt={data.avatar?.alt ?? data.name ?? 'avatar'}
            width={100}
            height={100}
          />
        </div>
      )}
      <div className="flex items-center justify-center mt-4 text-base tracking-tight text-white sm:text-2xl">
        <p>{data.name}</p>
        {data.linkedIn && (
          <Image
            src="/images/about/linkedIn.svg"
            className="ml-1 sm:ml-2 cursor-pointer"
            layout="native"
          />
        )}
      </div>
      <p className="mt-2 text-aserto-grey-70 font-roboto">{data.position}</p>
      <BlockContent
        blocks={data.bioRaw}
        className="leading-relaxed text-aserto-grey-70 font-roboto"
      />
    </div>
  </a>
)

/* old item
const ProfileItem = ({ data, withImage }: Props) => (
  <div className="flex flex-col p-6 overflow-hidden border rounded border-aserto-grey-10">
    <div className="flex items-center">
      {withImage && (
        <div className="w-20 h-20 mr-6 overflow-hidden rounded-full">
          <Image
            src={data.avatar?.asset?.url ?? ''}
            alt={data.avatar?.alt ?? data.name ?? 'avatar'}
            width={80}
            height={80}
            objectFit="cover"
          />
        </div>
      )}
      <div>
        <p className="text-white font-roboto">{data.name}</p>
        <p className="text-aserto-grey-60 font-roboto">{data.position}</p>
      </div>
    </div>
    <BlockContent
      blocks={data.bioRaw}
      className="py-6 leading-relaxed text-aserto-grey-60 font-roboto"
    />
    <div className="border-t border-aserto-grey-20">
      <Link
        href={data.linkedIn ?? ''}
        className="flex items-center pt-6 text-base font-medium uppercase transition-all duration-150 font-roboto text-aserto-lochivar-accent-40 hover:underline"
      >
        <LinkedinIcon className="mr-4" />
        VIEW PROFILE
      </Link>
    </div>
  </div>
)
*/

export default ProfileItem
