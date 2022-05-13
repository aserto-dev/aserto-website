// Primitives
import Button from 'components/primitives/button'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { IntegrationMetaFragment } from 'lib/sanity/generated'
import { useCallback, useMemo, useState } from 'react'

// Components
import IntegrationItem from './integration-item'

const pageSize = 6

const Integrations = ({
  integrations
}: {
  integrations: IntegrationMetaFragment[]
}) => {
  const [section] = useFadeInBottom()
  const [shownPages, setShownPages] = useState(1)

  const handleShowMore = useCallback(() => {
    setShownPages((p) => p + 1)
  }, [])

  const canShowMore = useMemo(() => {
    return integrations.length > shownPages * pageSize
  }, [integrations.length, shownPages])

  return (
    <section className="pb-28">
      <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3" ref={section}>
        {integrations.slice(0, shownPages * pageSize).map((integration) => {
          return <IntegrationItem data={integration} key={integration._id} />
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

export default Integrations
