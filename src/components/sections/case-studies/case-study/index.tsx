import Link from 'components/primitives/link'
import { BlockContent } from 'components/primitives/block-content'
import { CaseStudyFragment } from 'lib/sanity/generated'
import s from './case-study.module.scss'
import clsx from 'clsx'

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
        <h1 className="text-4.5xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-5xl">
          {caseStudy.company}
        </h1>
      </div>
      <BlockContent
        blocks={caseStudy.titleRaw}
        className={clsx('mt-14 sm:mt-20', s.body)}
      />
    </section>
  )
}

export default CaseStudy
