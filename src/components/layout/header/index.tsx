import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

// Primitives
import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

//Components
import Signup from 'components/sections/signup'

// SVGs
import MenuIcon from 'icons/menu.svg'
import CloseIcon from 'icons/menu-close.svg'
import Logo from 'icons/logo-header.svg'
import LogoMobile from 'icons/logo-header-mobile.svg'
import { HeaderDropdownLink } from './header-dropdown-link'
import { asertoConsoleRootUrl } from 'lib/constants'
import Menu from './menu'
// import PlaygroundBanner from 'components/sections/common/banners/playground'

export const headerLinks = [
  {
    label: 'Product',
    href: '',
    items: [
      {
        label: 'Benefits',
        href: '/benefits',
        isExternal: false
      },
      {
        label: 'Features',
        href: '/features',
        isExternal: false
      },
      {
        label: 'Customers',
        href: '/customers',
        isExternal: false
      },
      {
        label: 'Pricing',
        href: '/pricing',
        isExternal: false
      },
      {
        label: 'FAQ',
        href: '/faq',
        isExternal: false
      }
    ]
  },
  {
    label: 'Developers',
    href: '',
    items: [
      {
        label: 'Quickstarts',
        href: '/quickstarts',
        isExternal: false
      },
      {
        label: 'Documentation',
        href: 'https://docs.aserto.com/docs/',
        isExternal: true
      },
      {
        label: 'API reference',
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
        label: 'Open policy registry',
        href: 'https://openpolicyregistry.io',
        isExternal: true
      },
      {
        label: 'Slack',
        href: 'https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg',
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
    label: 'Company',
    href: '',
    items: [
      {
        label: 'About us',
        href: '/about',
        isExternal: false
      },
      {
        label: 'Contact us',
        href: '/contact',
        isExternal: false
      },
      {
        label: 'Careers',
        href: '/careers',
        isExternal: false
      },
      {
        label: 'Press',
        href: '/news',
        isExternal: false
      }
    ]
  }
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  useEffect(() => {
    if (
      window.location.hash.indexOf('signup') >= 0 ||
      window.location.hash.indexOf('sign-up') >= 0
    ) {
      setShowSignupModal(true)
      history.pushState(
        null,
        '',
        window.location.pathname + window.location.search
      )
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
      {showSignupModal && (
        <Signup closeModal={() => setShowSignupModal(false)} />
      )}
      {/* <PlaygroundBanner /> */}
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
                href: each.href ?? undefined,
                items: each.items.map((item) => ({
                  href: item.href ?? undefined,
                  label: item.label,
                  isExternal: item.isExternal
                }))
              }}
            />
          ))}
        </nav>
        <div className="hidden lg:block whitespace-nowrap">
          <Button
            variant="primary"
            size="sm"
            as="a"
            className="ml-8 inline-flex items-center cursor-pointer"
            onClick={() => setShowSignupModal(true)}
          >
            Try it FREE
          </Button>
          <Link
            className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-60 border-aserto-grey-20"
            href={asertoConsoleRootUrl}
            isExternal={false}
          >
            Sign In
          </Link>
        </div>
      </div>
      <Menu
        show={open}
        closeMenu={() => setOpen(false)}
        openModal={() => setShowSignupModal(true)}
      />
    </header>
  )
}

export default Header
