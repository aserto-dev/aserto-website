import Image from 'components/primitives/image'

type Props = {
  title: string
  icon: string
}

const ImpactItem = ({ icon, title }: Props) => {
  return (
    <div className="bg-aserto-grey-20 py-5 rounded">
      <div className="flex justify-center align-center">
        <Image layout="native" width={100} height={100} src={icon} />
      </div>
      <h5 className="w-10/12 text-center ml-5 mt-2 mb-5 text-1.5xl tracking-tight text-aserto-grey-90">
        {title}
      </h5>
    </div>
  )
}

export default ImpactItem
