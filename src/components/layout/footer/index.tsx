import { useMemo } from 'react'

const FooterSection = () => {
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])

  return (
    <footer className="bg-ds-background">
      <div className="px-4 py-6 pb-12 mx-auto overflow-hidden sm:py-12 max-w-container sm:px-6 lg:px-8">
        <p className="text-base text-center sm:mt-8 text-ds-gray font-book">
          &copy; {year} Aserto, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
