import { ValuePropFragment } from 'lib/sanity/generated'
import ValuePropItem from './value-prop-item'
import { useFadeInBottom } from 'hooks/use-gsap'
import s from './value-prop.module.scss'

type ValuePropType = ValuePropFragment & { direction: string; id: string }

const ValueProp = (props: ValuePropType) => {
  const [ref] = useFadeInBottom()
  return (
    <div ref={ref} id={props.id} className={s.scrollMargin}>
      <ValuePropItem {...props} />
    </div>
  )
}

export default ValueProp
