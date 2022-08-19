import { BlockContent } from 'components/primitives/block-content'
import { ValuePropFragment } from 'lib/sanity/generated'
import Container from '../container'
import ValueProp from './value-prop'

const Intro = ({ page }: { page: any }) => {
  const valueProps: ValuePropFragment[] = page.valueProps
  return (
    <Container className="text-aserto-grey-90 lg:px-12">
      <img
        className="object-fit h-[400px] z-0 absolute -right-2/3 sm:top-40 sm:transform sm:-translate-x-1/2"
        src="images/homepage/seafloor-teal.svg"
        alt="Sea Floor"
      />
      <BlockContent
        className="z-1 text-[30px] leading-[38px] text-center mt-16 mb-24 lg:px-20 xl:px-60 lg:py-20"
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
    </Container>
  )
}

export default Intro
