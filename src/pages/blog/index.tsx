// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import Hero from 'components/sections/blog/hero'
import MainPost from 'components/sections/blog/main-post'

// Sections

const Blog = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Hero />
      <MainPost />
    </PageLayout>
  )
}

export default Blog
