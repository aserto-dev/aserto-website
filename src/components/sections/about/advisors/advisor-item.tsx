import Link from 'next/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'
import Image from 'next/image'

type Props = {
  linkedin: string
  name: string
  position: string
  imageSrc?: string
}

const ProfileItem = ({ linkedin, name, position, imageSrc }: Props) => (
  <Link href={linkedin}>
    <a className="flex flex-col items-center text-center">
      {imageSrc && (
        <div className="flex overflow-hidden rounded-full">
          <Image src={imageSrc} alt={name} width={100} height={100} />
        </div>
      )}
      <div className="flex items-center justify-center mt-4 text-base tracking-tight text-white sm:text-2xl">
        <p>{name}</p>
        <LinkedinIcon className="ml-1 sm:ml-2" />
      </div>
      <p className="mt-2 text-aserto-grey-60 font-roboto">{position}</p>
    </a>
  </Link>
)

export default ProfileItem
