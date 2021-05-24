import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

// Primitives
import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

// SVGs
import MenuIcon from 'icons/menu.svg'
import CloseIcon from 'icons/menu-close.svg'
import Logo from 'icons/logo-header.svg'
import LogoMobile from 'icons/logo-header-mobile.svg'

import Menu from './menu'

const Header = () => {
  const [open, setOpen] = useState(false)

  const { pathname } = useRouter()

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [open])

  return (
    <header className="fixed top-0 z-40 w-full px-6 py-3 bg-aserto-grey-5 shadow-header lg:py-0">
      <div className="flex items-center justify-between w-full">
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
          <Link
            className={clsx(
              'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
              {
                'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                  pathname.includes('/product'),
                'border-transparent text-aserto-grey-60 ':
                  !pathname.includes('/product')
              }
            )}
            href="/"
          >
            Product
          </Link>
          <Link
            className={clsx(
              'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
              {
                'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                  pathname.includes('/developers'),
                'border-transparent text-aserto-grey-60':
                  !pathname.includes('/developers')
              }
            )}
            href="/"
          >
            Developers
          </Link>
          <Link
            className={clsx(
              'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
              {
                'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                  pathname.includes('/blog'),
                'border-transparent text-aserto-grey-60':
                  !pathname.includes('/blog')
              }
            )}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={clsx(
              'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
              {
                'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                  pathname.includes('/about'),
                'border-transparent text-aserto-grey-60':
                  !pathname.includes('/about')
              }
            )}
            href="/about"
          >
            About
          </Link>
          <Link
            className={clsx(
              'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
              {
                'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                  pathname.includes('/careers'),
                'border-transparent text-aserto-grey-60':
                  !pathname.includes('/careers')
              }
            )}
            href="/careers"
          >
            Careers
          </Link>
        </nav>
        <div className="hidden lg:block">
          <Button
            variant="primary"
            size="sm"
            as="a"
            href="#newsletter"
            className="inline-flex items-center"
          >
            Request Early Access
          </Button>
          <Link
            className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-60 border-aserto-grey-20"
            href="https://console.aserto.com/"
          >
            Sign In
          </Link>
        </div>
      </div>
      <Menu show={open} />
    </header>
  )
}

export default Header
