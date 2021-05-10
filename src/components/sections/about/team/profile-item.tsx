import Image from 'next/image'

// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

type Props = {
  description: string
  image: string
  linkedin: string
  name: string
  position: string
}

const ProfileItem = ({
  description,
  image,
  linkedin,
  name,
  position
}: Props) => (
  <div className="flex flex-col p-6 overflow-hidden border rounded border-aserto-grey-10">
    <div className="flex items-center">
      <div className="w-20 h-20 mr-6">
        <Image
          src={image}
          alt="Blog post cover"
          width={80}
          height={80}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div>
        <p className="text-aserto-grey-60 font-roboto">{name}</p>
        <p className="text-aserto-lochivar-90 font-roboto">{position}</p>
      </div>
    </div>
    <p className="py-6 leading-relaxed text-aserto-grey-60 font-roboto">
      {description}
    </p>
    <div className="border-t border-aserto-grey-20">
      <Link
        href={linkedin}
        className="flex items-center pt-6 font-medium text-white uppercase"
      >
        <LinkedinIcon className="mr-4" />
        VIEW PROFILE
      </Link>
    </div>
  </div>
)

export default ProfileItem
