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
          className="inline-block mb-12 font-roboto text-aserto-lochivar-accent-40 hover:underline"
        >
          Back to all case studies
        </Link>
      </div>

      {/* title */}
      <BlockContent
        blocks={caseStudy.titleRaw}
        className="mt-5 mb-10 text-center text-4xl sm:leading-none text-aserto-grey-90 sm:text-4xl px-20"
      />

      {/* logo and impact */}
      <div className="bg-white rounded-[6px]">
        <div className="flex items-center justify-center py-12">
          <Image
            src={caseStudy.logo?.asset?.url || '/404'}
            alt="Company logo"
            width={280}
            height={176}
            layout="native"
          />
        </div>
      </div>
      <div className="relative grid mx-auto mt-10 gap-[8rem] lg:grid-cols-3 mb-10">
        {caseStudy.impact?.map((item, i) => (
          <ImpactItem
            title={item?.title ?? ''}
            icon={item?.icon?.asset?.url ?? '/404'}
            key={i}
          />
        ))}
      </div>

      <QuoteItem
        authorName={caseStudy.quote?.authorName || ''}
        authorTitle={caseStudy.quote?.authorPosition || ''}
        authorImageSrc={caseStudy.quote?.authorAvatar?.asset?.url ?? ''}
        quote={caseStudy.quote?.quoteRaw}
      />

      <div className="px-5">
      <h2 className="mt-20 text-2xl leading-tight sm:leading-none text-aserto-grey-90 sm:text-3xl">
        About {caseStudy.company}
      </h2>
      <BlockContent
        blocks={caseStudy.overviewRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl leading-tight sm:leading-none text-aserto-grey-90 sm:text-3xl mt-12">
        Challenge
      </h2>
      <BlockContent
        blocks={caseStudy.challengeRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl leading-tight sm:leading-none text-aserto-grey-90 sm:text-3xl mt-12">
        Solution
      </h2>
      <BlockContent
        blocks={caseStudy.solutionRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl leading-tight sm:leading-none text-aserto-grey-90 sm:text-3xl mt-12">
        Results
      </h2>
      <BlockContent
        blocks={caseStudy.resultsRaw}
        className={clsx('mt-5 sm:mt-5', s.body)}
      />
      <h2 className="text-2xl leading-tight sm:leading-none text-aserto-grey-90 sm:text-3xl mt-12">
        Benefits
      </h2>
      <ul className={clsx('mt-5 sm:mt-5 text-lg list-disc list-inside', s.body)}>
       {caseStudy.impact?.map((item, i) => (
          <li key={i}>
            {item?.title ?? ''}
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}

export default CaseStudy
