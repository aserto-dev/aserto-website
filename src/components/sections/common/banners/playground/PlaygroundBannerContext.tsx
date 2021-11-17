import React, { createContext, useEffect, useState } from 'react'

const storageKey = 'aserto-playground-seen'

interface PlaygroundBannerContextState {
  isVisible: boolean
}

interface PlaygroundBannerParams {
  isVisible: boolean
  hideBanner: () => void
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
  const [state, setState] = useState<PlaygroundBannerContextState>({
    isVisible: true
  })

  const hideBanner = () => {
    if (state.isVisible) {
      setState({ isVisible: false })
    }
  }

  useEffect(() => {
    if (state.isVisible && localStorage.getItem(storageKey) == 'true') {
      hideBanner()
    } else if (!state.isVisible) {
      localStorage.setItem(storageKey, 'true')
    }
  })

  return (
    <PlaygroundBannerContext.Provider value={{ ...state, hideBanner }}>
      {children}
    </PlaygroundBannerContext.Provider>
  )
}

export default PlaygroundBannerContext
