// Layout
import PageLayout from 'components/layout/page'
import cms from 'lib/sanity'
import { BlockContent } from 'components/primitives/block-content'
import { InferGetStaticPropsType } from 'next'
import Accordion from '../components/primitives/accordion'

const Glossary = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageLayout
      contain
      footer="regular"
      headProps={{
        title:
          page.metadata?.title ??
          'Authorization Glossary of Terms - Aserto',
        description:
          page.metadata?.description ??
          'Glossary of identity and access control terms and definitions, covering both authentication and fine-grained access controls',
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
                        className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-5 md:text-xl font-roboto"
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

export const getStaticProps = async () => {
  const { allFaq } = await cms().FaqPage()
  const page = allFaq[0]
  return {
    props: { page }
  }
}

export default Glossary
