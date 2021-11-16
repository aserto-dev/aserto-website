// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { NewsPageFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import NewsItem from './news-item'

const pageSize = 6

const NewsItems = ({ page }: { page: NewsPageFragment }) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    const len = (page.newsEntries && page.newsEntries.length) || 0
    return len > shownPages * pageSize
  }, [page.newsEntries, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {page.newsEntries?.slice(0, shownPages * pageSize).map((post, i) => {
          return <NewsItem data={post || {}} key={i} />
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

export default NewsItems
