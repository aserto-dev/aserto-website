import Link from 'components/primitives/link'
import { BlockContent } from 'components/primitives/block-content'
import { JobPostingFragment } from 'lib/sanity/generated'
import s from './job-posting.module.scss'
import clsx from 'clsx'
import Button from 'components/primitives/button'

type Props = {
  posting: JobPostingFragment
}

const JobPosting = ({ posting }: Props) => {
  return (
    <section className="relative w-full mx-auto sm:w-10/12 pt-28 mb-52">
      <div>
        <Link
          href="/careers"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-4.5xl tracking-tight leading-tight sm:leading-none sm:tracking-tighter text-white sm:text-5xl">
          {posting.title}
        </h1>
      </div>
      <BlockContent
        blocks={posting.bodyRaw}
        className={clsx('mt-14 sm:mt-20', s.body)}
      />
      {posting.leverHref && (
        <a href={posting.leverHref} target="_blank" rel="noopener">
          <Button>Apply here!</Button>
        </a>
      )}
    </section>
  )
}

export default JobPosting
