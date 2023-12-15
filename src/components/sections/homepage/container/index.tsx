import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'
import { twMerge } from 'tailwind-merge'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  const [ref] = useFadeInBottom()
  return (
    <section className={twMerge(clsx('relative px-8', className))}>
      <div className="max-w-screen-xl mx-auto" ref={ref}>
        {children}
      </div>
    </section>
  )
}

export default Container
