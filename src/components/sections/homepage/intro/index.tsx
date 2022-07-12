import { BlockContent } from 'components/primitives/block-content'
import { ValuePropFragment } from 'lib/sanity/generated'
import Container from '../container'
import ValueProp from './value-prop'

const Intro = ({ page }: { page: any }) => {
  const valueProps: ValuePropFragment[] = page.valueProps
  return (
    <Container className="text-aserto-grey-90 lg:px-12">
      <BlockContent
        className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24"
        blocks={page.positioningStatementRaw}
      />
      {valueProps.map((v, i) => (
        <ValueProp
          key={i}
          title={v.title ?? ''}
          image={v.image}
          direction={v.direction}
        />
      ))}
    </Container>
  )
}

export default Intro
