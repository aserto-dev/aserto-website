import Image from 'components/primitives/image'

type Props = {
  title: string
  icon: string
}

const ImpactItem = ({ icon, title }: Props) => {
  return (
    <div className="flex">
      <div className="w-1/12">
        <Image src={icon} alt="value" width={48} height={48} />
      </div>
      <h5 className="w-11/12 ml-5 mt-2 mb-5 text-1.5xl tracking-tight text-aserto-grey-90">
        {title}
      </h5>
    </div>
  )
}

export default ImpactItem
