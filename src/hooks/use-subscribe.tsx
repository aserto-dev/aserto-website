import { useCallback, useEffect, useMemo, useState } from 'react'

const useSubscribe = (id: string) => {
  const [status, setStatus] = useState<'loading' | 'success' | 'failure'>()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault()
      const data = new FormData(e.currentTarget)
      const email = data.get('email')
      setStatus('loading')
      try {
        const res = await fetch(`/api/subscribe?email=${email}`)
        if (res.status === 200) {
          setStatus('success')
        } else {
          const { error } = await res.json()
          throw error
        }
      } catch (error) {
        setStatus('failure')
      }
    },
    []
  )

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus(undefined)
      }, 4000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [status])

  const inputProps: JSX.IntrinsicElements['input'] = useMemo(
    () => ({
      id,
      name: 'email',
      type: 'email',
      autoComplete: 'email',
      placeholder: 'Enter your email',
      required: true
    }),
    [id]
  )

  return { inputProps, status, onSubmit: handleSubmit }
}

export default useSubscribe
