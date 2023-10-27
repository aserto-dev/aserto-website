// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { BlockContent } from 'components/primitives/block-content'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Faq } from 'lib/sanity/generated'

const FaqPage = ({
  faq: page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
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
      <section className="pb-20 pt-6 mx-auto ml-8 maxsm:ml-4">
        <h1 className="text-4xl maxsm:text-3xl leading-none tracking-tight text-aserto-grey-90 mb-6 ">
          {page.title}
        </h1>
        <hr className="p-1 w-full mb-8 bg-hrGradient border-t-0" />
        {page.faqs?.map((faq, i) => {
          return (
            <div
              key={i}
              className="w-full flex maxsm:flex-col maxsm:gap-0 gap-12 mb-10 "
            >
              <div className="w-1/4 maxsm:w-full">
                <h2 className="text-3xl md:leading-tight text-aserto-grey-90 font-roboto mb-5">
                  {faq?.title}
                </h2>
              </div>
              <div className="w-2/3 maxsm:w-full">
                {faq?.questions?.map((question, j) => {
                  return (
                    <div key={j}>
                      <h3 className="text-2xl text-aserto-grey-90 font-roboto mb-3">
                        {question?.question}
                      </h3>
                      <BlockContent
                        className="text-[16px] text-aserto-grey-90  font-roboto mb-5"
                        blocks={question?.answerRaw}
                      />
                    </div>
                  )
                })}
              </div>
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
