import clsx from 'clsx'

type Props = {
  description: React.ReactNode
  icon: string
}

const FeatureItem = ({ description, icon }: Props) => {
  return (
    <div
      className={clsx(
        'h-72 relative p-6 overflow-hidden bg-aserto-black border border-aserto-grey-10 rounded-2xl item text-left sm:h-auto'
      )}
    >
      <img
        src={icon}
        alt="feature"
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
      />
      <div className="mt-3 text-lg leading-relaxed text-aserto-grey-60 sm:mt-6 font-roboto">
        {description}
      </div>
    </div>
  )
}

export default FeatureItem
