import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Events = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/events/kubecon-eu-2022')
  }, [router])

  return null
}

export default Events
