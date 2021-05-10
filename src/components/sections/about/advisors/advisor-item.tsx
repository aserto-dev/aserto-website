// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

type Props = {
  company: string
  linkedin: string
  name: string
  position: string
}

const ProfileItem = ({ company, linkedin, name, position }: Props) => (
  <div className="text-center">
    <Link
      href={linkedin}
      className="flex items-center justify-center text-2xl tracking-tight text-white"
    >
      {name}
      <LinkedinIcon className="ml-2" />
    </Link>
    <p className="text-aserto-grey-60">{position}</p>
    <p className="text-aserto-lochivar-90 font-roboto">{company}</p>
  </div>
)

export default ProfileItem
