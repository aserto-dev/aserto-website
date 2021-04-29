import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div className={clsx('relative max-w-screen-xl px-8 mx-auto', className)}>
    {children}
  </div>
)

export default Container
