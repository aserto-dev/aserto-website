// Primitives
import Link from 'components/primitives/link'

// Icons
import LinkedinIcon from 'icons/linkedin-bio.svg'

type Props = {
  description: string
  linkedin: string
  name: string
  position: string
}

const PositionItem = ({ description, linkedin, name, position }: Props) => (
  <div className="flex flex-col justify-between p-6 overflow-hidden border rounded border-aserto-grey-10 h-80">
    <div>
      <p className="mb-6 text-2xl font-medium text-aserto-grey-90 font-roboto">
        {name}
      </p>
      <p className="text-aserto-grey-60 font-roboto">{description}</p>
    </div>
    <div>
      <p className="py-6 leading-relaxed text-aserto-grey-60 font-roboto">
        {position}
      </p>
      <div className="border-t border-aserto-grey-20">
        <Link
          href={linkedin}
          className="flex items-center pt-6 font-medium uppercase font-roboto text-aserto-lochivar-accent-40"
        >
          <LinkedinIcon className="mr-4 text-aserto-lochivar-accent-40" />
          VIEW POSITION
        </Link>
      </div>
    </div>
  </div>
)

export default PositionItem
