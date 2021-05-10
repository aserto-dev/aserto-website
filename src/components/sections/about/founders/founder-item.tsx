import clsx from 'clsx'
import Image from 'next/image'

// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

// Styles
import s from './founder.module.css'

type Props = {
  bio: string
  image: string
  linkedin: string
  name: string
  position: string
}

const FounderItem = ({ bio, image, linkedin, name, position }: Props) => (
  <div
    className={clsx(
      'overflow-hidden border rounded border-aserto-grey-10 bg-aserto-black pt-24 pb-16',
      s.background
    )}
  >
    <div className="relative z-10 flex flex-col justify-between flex-1 my-2 px-28">
      <div className="w-32 h-32 mb-10">
        <Image
          alt={name}
          height={128}
          layout="responsive"
          objectFit="cover"
          src={image}
          width={128}
        />
      </div>
      <h3 className="mb-10 text-xl tracking-tight text-aserto-grey-90 sm:text-6xl">
        {name}
      </h3>
      <p className="text-xl text-aserto-grey-60 sm:text-1.5xl">{position}</p>
      <p className="mt-10 leading-relaxed tracking-wide sm:mt-5 text-aserto-grey-60 font-roboto">
        {bio}
      </p>
      <Link
        href={linkedin}
        className="flex items-center mt-10 font-medium text-white uppercase"
      >
        <LinkedinIcon className="mr-4" />
        Linkedin
      </Link>
    </div>
  </div>
)

export default FounderItem
