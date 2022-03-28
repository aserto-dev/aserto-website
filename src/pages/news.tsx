// Layout
import PageLayout from 'components/layout/page'
import Hero from 'components/sections/news/hero'
import NewsItems from 'components/sections/news'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const News = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title: 'Aserto News',
        description: 'Recent news articles about Aserto',
        image: 'images/og.png'
      }}
      newsletter={{
        title: 'Sign up for our newsletter',
        description: 'Get the latest company updates and technology articles',
        mailchimpEndpoint:
          'https://aserto.us1.list-manage.com/subscribe/post?u=69b1ad0e50144ade95e55f9d1&amp;id=016646afa1'
      }}
    >
      <Hero page={page} />
      <NewsItems page={page} />
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allNews } = await cms().NewsPage()
  const page = allNews[0]

  return {
    props: {
      page
    },
    revalidate: 1
  }
}

export default News
