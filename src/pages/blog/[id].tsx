// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import Post from 'components/sections/blog/blog-post'

const post: React.ComponentPropsWithoutRef<typeof Post> = {
  author: {
    company: 'Aserto',
    image: '/images/testimonials/testimonial-profile.png',
    name: 'Omri Gazitt',
    position: 'CEO'
  },
  category: 'Authorization  |  Developers',
  date: '03 may 2021',
  description: 'Authentication',
  image: '/images/blog/post001.png',
  title: 'OAuth2 Scopes are NOT Permissions'
}

const BlogPost = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Faq',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <Post {...post} />
    </PageLayout>
  )
}

export default BlogPost
