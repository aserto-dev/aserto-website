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
    <p className="mt-6 text-aserto-grey-60 font-roboto">
      {position}, <span className="inline-block"> {company}</span>
    </p>
  </div>
)

export default ProfileItem
