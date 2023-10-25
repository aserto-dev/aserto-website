import clsx from 'clsx'

interface Props {
  children?: React.ReactNode
  className?: string
  maxWidth?: boolean
}

const Container = ({ children, className, maxWidth }: Props) => (
  <div
    className={clsx(
      !maxWidth
        ? 'max-w-container mx-auto px-4 relative'
        : 'mx-auto max-w-full relative',
      className
    )}
  >
    {children}
  </div>
)

export default Container
