import Link from 'components/primitives/link'
import Image from 'components/primitives/image'
import { FrameworkPageFragment } from 'lib/sanity/generated'
import s from './framework.module.scss'
import clsx from 'clsx'

// Layout
import Container from 'components/layout/container'
import { BlockContent } from 'components/primitives/block-content'

// Sections
import CtaButtons from 'components/sections/common/cta-buttons'
import CodeViewer from 'components/sections/common/code-viewer'

type Props = {
  frameworkPage: FrameworkPageFragment
}

const Framework = ({ frameworkPage }: Props) => {
  const language = frameworkPage.framework?.framework?.codename ?? 'js'
  return (
    <section className="relative mx-auto pt-12 mb-20 lg:pt-24 md:pt-24">
      <div className="w-full mx-auto lg:w-11/12">
        <Container>
          <Link
            href="/frameworks"
            className="inline-block mb-12 font-roboto text-aserto-lochivar-accent-40 hover:underline"
          >
            Back to all languages and frameworks
          </Link>
        </Container>
      </div>

      <div className="max-w-container w-full mx-auto lg:w-11/12">
        {/* title */}
        <h1 className="mt-5 mb-5 text-center text-5xl lg:text-5xl sm:leading-none text-aserto-grey-90 px-10">
          {frameworkPage.title}
        </h1>

        <div className="flex items-center justify-center mx-8">
          <CodeViewer language={language} />
        </div>

        {/* language logo */}
        <div className="flex items-center justify-center py-5 px-5">
          <Image
            src={`/images/languages/${language}.svg`}
            alt="Technology logo"
            width={100}
            height={50}
            layout="native"
          />
        </div>
      </div>

      {/* subtitle */}
      <h2 className="mx-5 mt-10 mb-10 text-center text-4xl lg:text-4xl sm:leading-none text-aserto-grey-90 lg:px-20">
        {frameworkPage.subtitle}
      </h2>

      <CtaButtons />

      <div className="w-full sm:w-8/12 mx-auto">
        <Container className="px-5 mt-20">
          <BlockContent
            blocks={frameworkPage.bodyRaw}
            className={clsx('m-5 sm:m-5', s.body)}
          />
        </Container>
      </div>
    </section>
  )
}

export default Framework
