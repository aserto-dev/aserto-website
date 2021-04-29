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
      loading,
      disabled,
      className,
      variant = 'primary',
      size = 'lg',
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
                'relative group bg-ds-endgame transition-colors border-2 duration-150 rounded-lg text-white inline-flex items-center justify-center overflow-hidden',
                'hover:bg-white',
                swx(size, {
                  md: 'h-11 sm:h-12 px-8 text-lg',
                  lg: 'h-12 sm:h-16 px-10 text-lg sm:text-xl',
                  sm: 'h-10 px-5 text-sm'
                }),
                swx(variant, {
                  primary: 'hover:text-ds-endgame border-ds-endgame'
                })
              )
        }
      >
        <span className="z-10">{children}</span>
      </Element>
    )
  }
)

export default Button
