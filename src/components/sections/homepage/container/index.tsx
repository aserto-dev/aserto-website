import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <section className={clsx('relative px-4', className)}>
    <div className="max-w-screen-xl mx-auto">{children}</div>
  </section>
)

export default Container
