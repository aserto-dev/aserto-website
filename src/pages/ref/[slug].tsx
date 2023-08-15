// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { BlockContent } from 'components/primitives/block-content'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Accordion from 'components/primitives/accordion'
import { Faq } from 'lib/sanity/generated'

const FaqPage = ({
  faq: page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title:
          page.metadata?.title ??
          'Authorization Frequently Asked Questions - Aserto',
        description:
          page.metadata?.description ??
          'Frequently asked questions about authentication, authorization, role or attribute-based access control, access control lists, and fine-grained authorization',
        image: 'images/og.png'
      }}
    >
      <section className="py-20">
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          {page.title}
        </h1>
        {page.faqs?.map((faq, i) => {
          return (
            <div key={i}>
              <h2 className="mt-5 mb-16 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-16 md:text-4.5xl font-roboto">
                {faq?.title}
              </h2>
              <Accordion>
                {faq?.questions?.map((question, i) => {
                  return (
                    // @ts-ignore
                    <li key={i} label={<h3>{question?.question}</h3>}>
                      <BlockContent
                        className="mt-5 text-base md:leading-tight text-aserto-grey-70 sm:text-lg md:mt-5 md:text-xl font-roboto"
                        blocks={question?.answerRaw}
                      />
                    </li>
                  )
                })}
              </Accordion>
            </div>
          )
        })}
      </section>
    </PageLayout>
  )
}

export const getStaticPaths = async () => {
  const { allFaq } = await cms().FaqPagePaths()
  return {
    paths:
      allFaq?.map((uc) => ({
        params: { slug: uc.slug?.current as string }
      })) ?? [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{
  faq: Faq
}> = async (ctx) => {
  const slug = ctx.params?.slug as string
  const {
    allFaq: [faq]
  } = await cms().FaqPage({ slug })

  return {
    props: { faq },
    revalidate: 1
  }
}

export default FaqPage
