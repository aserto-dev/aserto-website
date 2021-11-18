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
  isVisible: true
})

interface PlaygroundBannerContextParams {
  children: React.ReactNode
}

export const PlaygroundBannerContextProvider = ({
  children
}: PlaygroundBannerContextParams) => {
  const [isVisible, setIsVisible] = useState(true)

  const hideBanner = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (
      isVisible &&
      localStorage.getItem(playgroundSeenStorageKey) === 'true'
    ) {
      hideBanner()
    } else if (!isVisible) {
      localStorage.setItem(playgroundSeenStorageKey, 'true')
    }
  }, [hideBanner, isVisible])

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
