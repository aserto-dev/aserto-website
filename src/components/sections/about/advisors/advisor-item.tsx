import Link from 'next/link'

// Icons
import Image from 'components/primitives/image'

type Props = {
  linkedin: string
  name: string
  position: string
  imageSrc?: string
}

const ProfileItem = ({ linkedin, name, position, imageSrc }: Props) => (
  <Link href={linkedin} className="flex flex-col items-center text-center">
    {imageSrc && (
      <div className="flex overflow-hidden w-[100px] rounded-full">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
        />
      </div>
    )}
    <div className="flex items-center justify-center mt-4 text-base tracking-tight text-white sm:text-2xl">
      <p>{name}</p>
      <Image
        src="/images/about/linkedIn.svg"
        className="ml-1 sm:ml-2 cursor-pointer"
        layout="native"
      />
    </div>
    <p className="mt-2 text-aserto-grey-70 font-roboto">{position}</p>
  </Link>
)

export default ProfileItem
