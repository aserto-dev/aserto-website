import { HomePageFragment, ValuePropFragment } from 'lib/sanity/generated'
import Container from '../container'
import ValueProp from './value-prop'

const Intro = ({ page }: { page: HomePageFragment }) => {
  const valueProps: ValuePropFragment[] = page.valueProps as ValuePropFragment[]
  return (
    <Container className="text-aserto-grey-90 lg:px-12">
      {valueProps.map((v, i) => (
        <ValueProp
          key={i}
          title={v.title ?? ''}
          subtitleRaw={v.subtitleRaw}
          image={v.image}
          element={v.element}
          glow={v.glow}
          direction={i & 1 ? 'left' : 'right'}
        />
      ))}
      <hr className="p-[2px] my-8 bg-hrGradient border-t-0" />
    </Container>
  )
}

export default Intro
