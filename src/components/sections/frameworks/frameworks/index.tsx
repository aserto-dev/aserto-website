// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { FrameworkPageMetaFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import FrameworkPageItem from './framework-item'

const pageSize = 6

const FrameworkPages = ({
  frameworkPages
}: {
  frameworkPages: FrameworkPageMetaFragment[]
}) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return frameworkPages?.length > shownPages * pageSize
  }, [frameworkPages?.length, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {frameworkPages?.slice(0, shownPages * pageSize).map((f) => {
          return <FrameworkPageItem data={f} key={f._id} />
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

export default FrameworkPages
