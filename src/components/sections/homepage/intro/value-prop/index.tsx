import { ValuePropFragment } from 'lib/sanity/generated'
import ValuePropItem from './value-prop-item'
import { useFadeInBottom } from 'hooks/use-gsap'
import s from './value-prop.module.scss'

type ValuePropType = ValuePropFragment & {
  direction: string
  id: string
  last?: boolean
}

const ValueProp = ({ id, last, ...props }: ValuePropType) => {
  const [ref] = useFadeInBottom()
  return (
    <div ref={ref} id={id} className={s.scrollMargin}>
      <ValuePropItem {...props} />
      {props.direction === 'left' && !last && (
        <hr className="p-[2px] my-8 bg-hrGradient border-t-0" />
      )}
    </div>
  )
}

export default ValueProp
