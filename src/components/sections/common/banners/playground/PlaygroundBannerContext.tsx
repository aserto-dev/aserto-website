import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

type Banner = {
  bannerLink: string
  bannerText: string
}

const banners: Record<string, Banner> = {
  'aserto-api-authorization-seen': {
    bannerLink: '/solutions/api-authorization',
    bannerText: 'API Authorization on Autopilot - Now Available from Aserto!'
  },
  'aserto-build-vs-buy-banner-seen': {
    bannerLink: '/solutions/multitenant-application-authorization',
    bannerText:
      'Deciding on Building or Buying Authorization? Get the Whitepaper!'
  },
  'aserto-authzen-banner-seen': {
    bannerLink: '/lp/authzen',
    bannerText: 'Learn more about OpenID AuthZEN!'
  },
  'aserto-topaz-032-banner-seen': {
    bannerLink: '/blog/announcing-topaz-0-32',
    bannerText: 'Topaz 0.32 is Here - Read all about it!'
  },
  'aserto-architecture-fga-webinar-banner-seen': {
    bannerLink: '/resources/architecture-authorization-applications-webinar',
    bannerText:
      'The Architecture of Scalable, Granular Permissions Webinar - Watch it Now!'
  },
  'aserto-fga-book-banner-seen': {
    bannerLink: '/resources/fine-grained-authorization-ebook',
    bannerText: 'Get Your Copy of our Fine-Grained Authorization e-book!'
  }
}

interface PlaygroundBannerParams {
  bannerLink: string
  bannerText: string
  hideBanner: () => void
  isVisible: boolean
}

const PlaygroundBannerContext = createContext<PlaygroundBannerParams>({
  bannerLink: '',
  bannerText: '',
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
  const [currentBanner, setCurrentBanner] = useState('')
  const [bannerLink, setBannerLink] = useState('')
  const [bannerText, setBannerText] = useState('')

  const hideBanner = useCallback(() => {
    setIsVisible(false)
    localStorage.setItem(currentBanner, 'true')
  }, [currentBanner])

  useEffect(() => {
    if (!isVisible && !currentBanner) {
      for (const banner of Object.keys(banners)) {
        if (localStorage.getItem(banner) === null) {
          setIsVisible(true)
          setCurrentBanner(banner)
          setBannerLink(banners[banner].bannerLink)
          setBannerText(banners[banner].bannerText)
          break
        }
      }
    }
  }, [isVisible, currentBanner])

  const value = useMemo(
    () => ({ bannerLink, bannerText, isVisible, hideBanner }),
    [bannerLink, bannerText, isVisible, hideBanner]
  )

  return (
    <PlaygroundBannerContext.Provider value={value}>
      {children}
    </PlaygroundBannerContext.Provider>
  )
}

export default PlaygroundBannerContext
