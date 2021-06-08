// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { GetStaticProps } from 'next'
import { JobPostingFragment } from 'lib/sanity/generated'
import Error from 'next/error'
import JobPosting from 'components/sections/careers/job-posting'

type Props = {
  posting: JobPostingFragment
}

const JobPostingPage = ({ posting }: Props) => {
  if (!posting) return <Error statusCode={404} />

  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Careers',
        description: 'Authorization for All',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <JobPosting posting={posting} />
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allJobPosting } = await cms().JobPostingPaths()
  return {
    paths:
      allJobPosting?.map((post) => ({
        params: { slug: post.slug?.current as string }
      })) ?? [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allJobPosting: [posting]
  } = await cms().JobPosting({ slug })

  return {
    props: { posting },
    revalidate: 1
  }
}

export default JobPostingPage
