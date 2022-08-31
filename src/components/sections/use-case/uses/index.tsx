import Container from 'components/sections/homepage/container'
import { UseCaseFeatureFragment } from 'lib/sanity/generated'
import UseCaseFeatureItem from './use-case-feature-item'

const Uses = ({ features }: { features: UseCaseFeatureFragment[] }) => {
  return (
    <Container className="text-left pt-32 px-4 sm:px-8">
      {features.map((feature, i) => (
        <UseCaseFeatureItem key={i} {...feature} />
      ))}
    </Container>
  )
}

export default Uses
