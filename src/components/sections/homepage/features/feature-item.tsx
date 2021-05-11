import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  category: string
  description: string
  icon: string
  display?: boolean
}

const FeatureItem = ({
  category,
  description,
  icon,
  display = true
}: Props) => {
  return (
    <div
      className={clsx(
        'h-72 relative p-6 overflow-hidden bg-aserto-black border border-aserto-grey-10 rounded-2xl item text-left sm:h-auto',
        category
      )}
      style={{ display: `${!display && 'none'}` }}
    >
      <Image src={icon} alt="feature" width={48} height={48} />
      <p className="mt-3 text-lg leading-relaxed text-aserto-grey-60 sm:mt-6 font-roboto">
        {description}
      </p>
      <small className="sr-only">{category}</small>
    </div>
  )
}

export default FeatureItem
