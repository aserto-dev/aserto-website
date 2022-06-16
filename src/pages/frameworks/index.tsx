// Layout
import PageLayout from 'components/layout/page'
import Container from 'components/layout/container'

// Sections
import Hero from 'components/sections/frameworks/hero'
import FrameworkPages from 'components/sections/frameworks/frameworks'
import Image from 'components/primitives/image'
import cms from 'lib/sanity'
import { InferGetStaticPropsType } from 'next'

const FrameworksPage = ({
  frameworkPages
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: 'Aserto Languages and Frameworks',
        description: 'Language and framework integrations for Aserto',
        image: 'images/og.png'
      }}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 right-0">
          <Image
            src="/images/blog/bg-gradient.png"
            width={3840}
            height={1920}
            loading="eager"
          />
        </div>
        <Container>
          <Hero />
          <FrameworkPages frameworkPages={frameworkPages} />
        </Container>
      </div>
    </PageLayout>
  )
}

export const getStaticProps = async () => {
  const { allFrameworkPage } = await cms().FrameworkPages()
  return {
    props: { frameworkPages: allFrameworkPage },
    revalidate: 1
  }
}

export default FrameworksPage
