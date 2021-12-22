// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { CaseStudyMetaFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import CaseStudyItem from './caseStudy-item'

const pageSize = 6

const CaseStudies = ({ caseStudies }: { caseStudies: CaseStudyMetaFragment[] }) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return caseStudies.length > shownPages * pageSize
  }, [caseStudies.length, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {caseStudies.slice(0, shownPages * pageSize).map((caseStudy) => {
          return <CaseStudyItem data={caseStudy} key={caseStudy._id} />
        })}
      </div>
      {canShowMore && (
        <div className="mt-24 text-center">
          <Button variant="secondary" size="md" onClick={handleShowMore}>
            More
          </Button>
        </div>
      )}
    </section>
  )
}

export default CaseStudies
