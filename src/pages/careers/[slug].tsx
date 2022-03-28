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
      footer="regular"
      headProps={{
        title: `${posting.title} - Aserto Job Posting`,
        description: `Aserto job description for ${posting.title}`,
        image: 'images/og.png'
      }}
    >
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
    fallback: false
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
