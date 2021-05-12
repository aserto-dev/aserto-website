import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div
    className={clsx(
      'max-w-container mx-auto px-4 relative',
      className
    )}
  >
    {children}
  </div>
)

export default Container
