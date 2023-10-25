import { BlockContent } from 'components/primitives/block-content'
import { HomePageFragment, ValuePropFragment } from 'lib/sanity/generated'
import Container from '../container'
import ValueProp from './value-prop'

const Intro = ({ page }: { page: HomePageFragment }) => {
  const valueProps: ValuePropFragment[] = page.valueProps as ValuePropFragment[]
  return (
    <Container className="text-aserto-grey-90 lg:px-12">
      <BlockContent
        className="z-1 text-[26px] lg:text-[34px] leading-8 lg:leading-10 text-center
        mt-16 mb-24 lg:px-20 xl:px-60 lg:py-20"
        blocks={page.positioningStatementRaw}
      />
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
