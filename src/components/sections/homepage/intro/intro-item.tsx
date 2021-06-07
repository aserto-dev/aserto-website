import Image from 'components/primitives/image'

type Props = {
  text: string
  image: string
}

const IntroItem = ({ text, image }: Props) => (
  <div className="flex items-center p-4 border-b border-aserto-grey-20">
    <Image
      layout="native"
      src={image ?? '/404'}
      alt={text}
      width={40}
      height={40}
    />
    <span className="text-lg font-roboto text-aserto-grey-60 ml-4">{text}</span>
  </div>
)

export default IntroItem
