// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'

// Sections

const Careers = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Careers',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
    </PageLayout>
  )
}

export default Careers
