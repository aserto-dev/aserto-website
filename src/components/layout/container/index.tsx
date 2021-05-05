import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div className={clsx('relative max-w-container mx-auto px-4', className)}>
    {children}
  </div>
)

export default Container
