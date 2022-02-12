import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

const playgroundSeenStorageKey = 'aserto-playground-seen'

interface PlaygroundBannerParams {
  hideBanner: () => void
  isVisible: boolean
}

const PlaygroundBannerContext = createContext<PlaygroundBannerParams>({
  hideBanner: () => {},
  isVisible: false
})

interface PlaygroundBannerContextParams {
  children: React.ReactNode
}

export const PlaygroundBannerContextProvider = ({
  children
}: PlaygroundBannerContextParams) => {
  const [isVisible, setIsVisible] = useState(false)

  const hideBanner = useCallback(() => {
    setIsVisible(false)
    localStorage.setItem(playgroundSeenStorageKey, 'true')
  }, [])

  useEffect(() => {
    if (!isVisible && localStorage.getItem(playgroundSeenStorageKey) === null) {
      setIsVisible(true)
    }
  }, [isVisible])

  const value = useMemo(
    () => ({ isVisible, hideBanner }),
    [isVisible, hideBanner]
  )

  return (
    <PlaygroundBannerContext.Provider value={value}>
      {children}
    </PlaygroundBannerContext.Provider>
  )
}

export default PlaygroundBannerContext
