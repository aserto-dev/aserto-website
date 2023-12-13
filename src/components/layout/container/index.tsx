import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div
    className={twMerge(
      clsx('max-w-container mx-auto px-4 relative', className)
    )}
  >
    {children}
  </div>
)

export default Container
