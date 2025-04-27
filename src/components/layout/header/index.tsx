import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import props from 'lib/menu-items'
import {
  ResourceFragment,
  SolutionFragment,
  UseCaseFragment
} from 'lib/sanity/generated'

// Primitives
import Link from 'components/primitives/link'

// SVGs
import PlaygroundBanner from 'components/sections/common/banners/playground'
import LogoMobile from 'icons/logo-header-mobile.svg'
import Logo from 'icons/logo-header.svg'
import CloseIcon from 'icons/menu-close.svg'
import MenuIcon from 'icons/menu.svg'
import IconSlack from 'icons/slack.svg'
import IconGithub from 'icons/github.svg'
import { asertoConsoleRootUrl } from 'lib/constants'
import { HeaderDropdownLink } from './header-dropdown-link'
import Menu from './menu'
import Button from 'components/primitives/button'
import NoSSR from 'components/sections/common/NoSSR'

const { solutions } = props as unknown as {
  resources: ResourceFragment[]
  solutions: SolutionFragment[]
  useCases: UseCaseFragment[]
}

export const headerLinks = [
  {
    label: 'Product',
    href: '',
    items: [
      {
        label: 'Overview',
        href: '/benefits',
        isExternal: false
      },
      {
        label: 'Features',
        href: '/features',
        isExternal: false
      },
      {
        label: 'See a demo',
        href: '/see-demo',
        isExternal: false
      },
      {
        label: 'Pricing',
        href: '/pricing',
        isExternal: false
      }
    ]
  },
  {
    label: 'Solutions',
    href: '',
    items: solutions
      .map((s) => ({
        label: s.shortHeaderTitle,
        href: `/solutions/${s.slug?.current}`,
        isExternal: false
      }))
      .concat({
        label: 'Success stories',
        href: '/customers',
        isExternal: false
      })
  },
  {
    label: 'Docs',
    href: 'https://docs.aserto.com/docs',
    items: []
  },
  {
    label: 'Blog',
    href: '/blog',
    items: []
  },
  {
    label: 'Company',
    href: '',
    items: [
      {
        label: 'About',
        href: '/about',
        isExternal: false
      },
      {
        label: 'Events',
        href: '/events',
        isExternal: false
      },
      {
        label: 'Careers',
        href: '/careers',
        isExternal: false
      },
      {
        label: 'Contact',
        href: '/contact',
        isExternal: false
      }
    ]
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (
      window.location.hash.indexOf('signup') >= 0 ||
      window.location.hash.indexOf('sign-up') >= 0
    ) {
      window.location.replace(asertoConsoleRootUrl + '/#signup')
    }
  }, [])

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
            <NoSSR key={idx}>
              <HeaderDropdownLink
                key={idx}
                id={idx}
                link={{
                  label: each.label,
                  href: each.href ?? undefined,
                  items: each.items.map((item) => ({
                    href: item.href ?? undefined,
                    label: item.label,
                    isExternal: item.isExternal
                  }))
                }}
              />
            </NoSSR>
          ))}
        </nav>
        <div className="hidden lg:block whitespace-nowrap items-center">
          <Link
            className="ml-8 inline-flex align-middle"
            href="https://www.aserto.com/slack"
          >
            <span className="sr-only">Slack</span>
            <IconSlack />
          </Link>
          <Link
            className="hidden lg:inline-flex xl:hidden ml-8 align-middle"
            href="https://github.com/aserto-dev/topaz"
          >
            <span className="sr-only">GitHub</span>
            <IconGithub />
          </Link>
          <Link
            className="hidden xl:inline-flex ml-8 align-middle"
            href="https://github.com/aserto-dev/topaz"
          >
            <span className="sr-only">GitHub</span>
            <img
              width="150px"
              src="https://img.shields.io/github/stars/aserto-dev/topaz?style=for-the-badge&logo=github&logoColor=%23e7e7e7&logoSize=auto&label=Topaz&labelColor=rgb(30%2C30%2C30)&color=rgb(100%2C100%2C100)&link=https%3A%2F%2Fgithub.com%2Faserto-dev%2Ftopaz"
              alt="github"
            />
          </Link>
          <NoSSR>
            {/*
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={asertoConsoleRootUrl + '/#signup'}
              className="ml-8 font-medium inline-flex items-center cursor-pointer"
            >
              Sign up
            </Button>
            */}
          </NoSSR>
          <NoSSR>
            <Link
              className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-70 border-aserto-grey-20"
              href={asertoConsoleRootUrl}
              isExternal={false}
            >
              Sign in
            </Link>
          </NoSSR>
        </div>
      </div>
      <Menu
        show={open}
        closeMenu={() => setOpen(false)}
        signupRedirect={() =>
          history.pushState(null, '', asertoConsoleRootUrl + '/#signup')
        }
      />
    </header>
  )
}

export default Header
