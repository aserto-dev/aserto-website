import { BlockContent } from 'components/primitives/block-content'
import Image from 'components/primitives/image'

// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'
import { MemberFragment } from 'lib/sanity/generated'

type Props = {
  data: MemberFragment
}

const ProfileItem = ({ data }: Props) => (
  <div className="flex flex-col p-6 overflow-hidden border rounded border-aserto-grey-10">
    <div className="flex items-center">
      <div className="w-20 h-20 mr-6">
        <Image
          src={data.avatar?.asset?.url ?? ''}
          alt={data.avatar?.alt ?? data.name ?? 'avatar'}
          width={80}
          height={80}
          objectFit="cover"
        />
      </div>
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

export default ProfileItem
