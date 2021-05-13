import Image from 'next/image'

// Primitives
import Link from 'components/primitives/link'

type Props = {
  description: string
  icon: string
  linkedin: string
  name: string
  position: string
}

const PositionItem = ({
  description,
  icon,
  linkedin,
  name,
  position
}: Props) => (
  <div className="flex flex-col justify-between p-6 overflow-hidden border rounded border-aserto-grey-10 h-96">
    <div>
      <Image src={icon} width="48" height="48" />
      <p className="my-6 text-2xl font-medium text-aserto-grey-90 font-roboto">
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
          VIEW POSITION
        </Link>
      </div>
    </div>
  </div>
)

export default PositionItem
