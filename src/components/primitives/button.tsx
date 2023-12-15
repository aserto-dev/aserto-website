import clsx from 'clsx'
import { swx } from 'lib/swx'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import { twMerge } from 'tailwind-merge'

const ButtonDefaultElement = 'button'

type ButtonOwnProps = {
  variant?: 'unstyled' | 'primary' | 'secondary'
  size?: 'md' | 'lg' | 'sm'
}

export type ButtonProps<
  T extends React.ElementType = typeof ButtonDefaultElement
> = PolymorphicPropsWithoutRef<ButtonOwnProps, T>

const Button = <T extends React.ElementType = typeof ButtonDefaultElement>({
  as,
  children,
  className,
  disabled,
  loading,
  size = 'lg',
  variant = 'primary',
  ...moreProps
}: ButtonProps<T>) => {
  const Element: React.ElementType = as || ButtonDefaultElement

  return (
    <Element
      {...moreProps}
      disabled={loading || disabled}
      className={
        variant === 'unstyled'
          ? className
          : twMerge(
              clsx(
                'transition-colors duration-200 rounded inline-block overflow-hidden font-roboto font-medium outline-none',
                'focus:outline-none',
                { 'pointer-events-none select-none': disabled },
                swx(size, {
                  sm: 'h-10 px-5 text-sm',
                  md: 'h-11 sm:h-9 px-8 text-sm',
                  lg: 'h-12 sm:h-14.25 px-10 text-lg sm:text-lg'
                }),
                swx(variant, {
                  primary: !disabled
                    ? 'bg-aserto-lochivar-100 text-white hover:bg-aserto-lochivar-accent-10 focus:bg-aserto-lochivar-accent-20'
                    : 'bg-aserto-lochivar-30 text-aserto-grey-60',
                  secondary: !disabled
                    ? 'bg-aserto-grey-10 text-aserto-grey-90 border border-aserto-grey-20 hover:bg-aserto-grey-30 hover:border-aserto-grey-30 focus:bg-aserto-grey-30 focus:border-aserto-grey-30'
                    : 'bg-aserto-grey-5 text-aserto-grey-30'
                }),
                className
              )
            )
      }
    >
      {children}
    </Element>
  )
}

export default Button
