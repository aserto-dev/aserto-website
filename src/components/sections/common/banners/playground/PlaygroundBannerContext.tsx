import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

const bannerSeenStorageKey = 'aserto-identiverse-banner-seen'

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
    localStorage.setItem(bannerSeenStorageKey, 'true')
  }, [])

  useEffect(() => {
    if (!isVisible && localStorage.getItem(bannerSeenStorageKey) === null) {
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
