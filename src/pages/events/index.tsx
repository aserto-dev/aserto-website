import PageLayout from 'components/layout/page'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Events = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/events/kubecon-eu-2022')
  }, [router])

  return (
    <PageLayout
      headProps={{
        title: 'Aserto Events',
        description: 'Meet the Aserto team at these events.',
        image: 'images/og.png'
      }}
    />
  )
}

export default Events
