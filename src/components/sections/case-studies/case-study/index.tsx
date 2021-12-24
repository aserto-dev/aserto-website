import Link from 'components/primitives/link'
import Image from 'components/primitives/image'
import { BlockContent } from 'components/primitives/block-content'
import { CaseStudyFragment } from 'lib/sanity/generated'
import s from './case-study.module.scss'
import clsx from 'clsx'
import ImpactItem from './impact-item'
import QuoteItem from './quote-item'

type Props = {
  caseStudy: CaseStudyFragment
}

const CaseStudy = ({ caseStudy }: Props) => {
  return (
    <section className="relative w-full mx-auto lg:w-10/12 pt-12 mb-52 lg:pt-24  md:pt-24">
      <div>
        <Link
          href="/casestudies"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to all case studies
        </Link>
      </div>

      {/* title */}
      <BlockContent
        blocks={caseStudy.titleRaw}
        className="mt-5 mb-20 text-center text-4.5xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-5xl"
      />

      {/* logo and impact */}
      <div className="flex mb-20">
        <div className="w-4/12 flex items-center justify-center bg-white mr-10">
          <div
            className="w-10/12"
          >
            <Image
              src={caseStudy.logo?.asset?.url || '/404'}
              alt="Company logo"
              width={384}
              height={150}
              objectFit="contain"
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-8/12">
          {caseStudy.impact?.map((item, i) => (
            <ImpactItem
              title={item?.title ?? ''}
              icon={item?.icon?.asset?.url ?? '/404'}
              key={i}
            />
          ))}
        </div>
      </div>

      <QuoteItem
        authorName={caseStudy.quote?.authorName || ''}
        authorTitle={caseStudy.quote?.authorPosition || ''}
        authorImageSrc={caseStudy.quote?.authorAvatar?.asset?.url ?? ''}
        quote={caseStudy.quote?.quoteRaw}
      />

      <h2 className="mt-20 text-2xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-3xl">
        About {caseStudy.company}
      </h2>
      <BlockContent
        blocks={caseStudy.overviewRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-3xl">
        Challenge
      </h2>
      <BlockContent
        blocks={caseStudy.challengeRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-3xl">
        Solution
      </h2>
      <BlockContent
        blocks={caseStudy.solutionRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-3xl">
        Results
      </h2>
      <BlockContent
        blocks={caseStudy.resultsRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
    </section>
  )
}

export default CaseStudy
