// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { LandingPageFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import LandingPageItem from './landing-page-item'

const pageSize = 6

const LandingPages = ({
  landingPages
}: {
  landingPages: LandingPageFragment[]
}) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return landingPages.length > shownPages * pageSize
  }, [landingPages.length, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {landingPages.slice(0, shownPages * pageSize).map((lp) => {
          return <LandingPageItem data={lp} key={lp._id} />
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

export default LandingPages
