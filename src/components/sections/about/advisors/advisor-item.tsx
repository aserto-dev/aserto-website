// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

type Props = {
  linkedin: string
  name: string
  position: string
}

const ProfileItem = ({ linkedin, name, position }: Props) => (
  <div className="text-center">
    <Link
      href={linkedin}
      className="flex items-center justify-center text-base tracking-tight text-white sm:text-2xl"
    >
      {name}
      <LinkedinIcon className="ml-1 sm:ml-2" />
    </Link>
    <p className="mt-6 text-aserto-grey-60 font-roboto">{position}</p>
  </div>
)

export default ProfileItem
