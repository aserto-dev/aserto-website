import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { forwardRef } from 'react'
import { checkIfExternal } from 'lib/router'
import clsx from 'clsx'

type Props = {
  variant?: 'unstyled' | 'nav'
} & JSX.IntrinsicElements['a'] &
  Omit<NextLinkProps, 'as' | 'passHref'>

const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, variant, ...restProps }, ref) => {
    const {
      href,
      // NextLink Props
      replace,
      scroll,
      shallow,
      prefetch,
      // Rest
      ...aProps
    } = restProps

    const isExternal = checkIfExternal(href)

    return (
      <NextLink
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        passHref
      >
        <a
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener' : undefined}
          {...aProps}
          ref={ref}
          className={
            variant === 'unstyled'
              ? className
              : clsx(className, 'whitespace-nowrap text-primary', {
                  'text-xl text-ds-pewter font-bold': variant === 'nav'
                })
          }
        >
          {children}
        </a>
      </NextLink>
    )
  }
)

export type LinkProps = React.ComponentPropsWithRef<typeof Link>
export default Link
