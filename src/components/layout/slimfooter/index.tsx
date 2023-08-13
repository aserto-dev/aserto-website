import { useMemo } from 'react'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

const SlimFooter = () => {
  const [ref] = useFadeInBottom()
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])

  return (
    <footer
      className="bg-aserto-grey-5 w-full h-[48px] leading-[48px] text-center"
      ref={ref}
    >
      <p className="text-aserto-grey-70 font-roboto">
        &copy; {year} Aserto, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default SlimFooter
