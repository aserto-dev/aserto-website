import Image from 'components/primitives/image'
import s from './edition-item.module.scss'
import clsx from 'clsx'

type Props = {
  data: string
  bullet: boolean
}

const Bullet = ({ data, bullet } : Props) => {
  return (
    <div className="flex px-6 mt-3 text-base tracking-tight text-aserto-grey-90 font-roboto">
      { bullet && 
        <div className={s.bullet}>
          <Image
            src="/images/pricing/Oval.svg"
            loading="eager"
            width={14}
            height={14}
          />
        </div>
      }
      <div className={clsx("text-md", bullet ? "ml-3" : "font-bold")}>{data}&nbsp;</div>
    </div>
  )
}

export default Bullet
