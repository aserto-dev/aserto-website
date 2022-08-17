import clsx from 'clsx'
import { useFadeInBottom } from 'hooks/use-gsap'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  const [ref] = useFadeInBottom()
  return (
    <section className={clsx('relative px-8', className)}>
      <div className="max-w-screen-xl mx-auto" ref={ref}>
        {children}
      </div>
    </section>
  )
}

export default Container
