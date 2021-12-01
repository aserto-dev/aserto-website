import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

// Primitives
import Button from 'components/primitives/button'
import Link from 'components/primitives/link'
import NextLink from 'next/link'

// SVGs
import MenuIcon from 'icons/menu.svg'
import CloseIcon from 'icons/menu-close.svg'
import Logo from 'icons/logo-header.svg'
import LogoMobile from 'icons/logo-header-mobile.svg'
import { HeaderDropdownLink } from './header-dropdown-link'

import Menu from './menu'
import PlaygroundBanner from 'components/sections/common/banners/playground'

export const headerLinks = [
  {
    label: 'Developers',
    href: '',
    items: [
      {
        label: 'Documentation',
        href: 'https://docs.aserto.com/',
        isExternal: true
      },
      {
        label: 'API Reference',
        href: 'https://aserto.readme.io/',
        isExternal: true
      },
      {
        label: 'GitHub',
        href: 'https://github.com/aserto-dev',
        isExternal: true
      },
      {
        label: 'SDKs',
        href: 'https://docs.aserto.com/docs/software-development-kits/overview',
        isExternal: true
      },
      {
        label: 'Slack Community',
        href: 'https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg',
        isExternal: true
      },
      {
        label: 'Open Policy Registry',
        href: 'https://openpolicyregistry.io',
        isExternal: true
      }
    ]
  },
  {
    label: 'Blog',
    href: '/blog',
    items: []
  },
  {
    label: 'About',
    href: '/about',
    items: []
  },
  {
    label: 'Careers',
    href: '/careers',
    items: []
  },
  {
    label: 'Playground',
    href: '/playground',
    items: []
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [open])
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{ position: '-webkit-sticky' }}
    >
      <PlaygroundBanner />
      <div className="bg-aserto-grey-5 flex items-center justify-between px-6 py-3 lg:py-0 shadow-header w-full">
        <nav className="flex items-center justify-between w-full lg:hidden">
          <Link href="/">
            <LogoMobile />
          </Link>
          <div className="relative w-6 h-6">
            <MenuIcon
              className={clsx('absolute transition-opacity duration-300', {
                'opacity-0 invisible': open
              })}
              onClick={() => setOpen(!open)}
            />
            <CloseIcon
              className={clsx('absolute transition-opacity duration-300', {
                'opacity-0 invisible': !open
              })}
              onClick={() => setOpen(!open)}
            />
          </div>
        </nav>
        <nav className="items-center hidden space-x-10 lg:flex">
          <Link href="/">
            <Logo />
          </Link>
          <div className="bg-aserto-grey-20 w-[1px] h-9 mx-4" />
          {headerLinks.map((each, idx) => (
            <HeaderDropdownLink
              key={idx}
              id={idx}
              link={{
                label: each.label,
                href: each.href ?? '',
                items: each.items.map((item) => ({
                  href: item.href ?? '',
                  label: item.label,
                  isExternal: item.isExternal
                }))
              }}
            />
          ))}
        </nav>
        <div className="hidden lg:block">
          <NextLink href="/signup" passHref>
            <Button
              variant="primary"
              size="sm"
              as="a"
              className="inline-flex items-center"
            >
              Join the Beta
            </Button>
          </NextLink>
          <Link
            className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-60 border-aserto-grey-20"
            href="https://console.aserto.com/"
          >
            Sign In
          </Link>
        </div>
      </div>
      <Menu show={open} closeMenu={() => setOpen(false)} />
    </header>
  )
}

export default Header
