import clsx from 'clsx'
import { swx } from 'lib/swx'
import { forwardRef } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'

const ButtonDefaultElement = 'button'

type ButtonOwnProps = {
  variant?: 'unstyled' | 'primary'
  size?: 'md' | 'lg' | 'sm'
}

export type ButtonProps<
  T extends React.ElementType = typeof ButtonDefaultElement
> = PolymorphicPropsWithRef<ButtonOwnProps, T>

const Button: PolymorphicForwardRefExoticComponent<
  ButtonOwnProps,
  typeof ButtonDefaultElement
> = forwardRef(
  <T extends React.ElementType = typeof ButtonDefaultElement>(
    {
      as,
      children,
      className,
      disabled,
      loading,
      size = 'lg',
      variant = 'primary',
      ...moreProps
    }: PolymorphicPropsWithoutRef<ButtonOwnProps, T>,
    ref: React.ForwardedRef<React.ElementRef<T>>
  ) => {
    const Element: React.ElementType = as || ButtonDefaultElement

    return (
      <Element
        {...moreProps}
        ref={ref}
        disabled={loading || disabled}
        className={
          variant === 'unstyled'
            ? className
            : clsx(
                className,
                'relative group bg-aserto-lochivar-100 transition-colors duration-150 rounded text-white inline-flex items-center justify-center overflow-hidden font-roboto font-medium outline-none',
                'focus:outline-none',
                swx(size, {
                  md: 'h-11 sm:h-9 px-8 text-sm',
                  lg: 'h-12 sm:h-14.25 px-10 text-lg sm:text-lg',
                  sm: 'h-10 px-5 text-sm'
                }),
                swx(variant, {
                  primary: 'hover:bg-aserto-lochivar-80'
                })
              )
        }
      >
        {children}
      </Element>
    )
  }
)

export default Button
