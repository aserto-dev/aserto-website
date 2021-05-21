import { useCallback, useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

// Primitives
import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

// SVGs
import MenuIcon from 'icons/menu.svg'
import CloseIcon from 'icons/menu-close.svg'
import Logo from 'icons/logo-header.svg'
import LogoMobile from 'icons/logo-header-mobile.svg'

import Menu from './menu'
import clsx from 'clsx'
import { useRouter } from 'next/router'

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const triggerOpen = () => setIsOpen(true)
  const triggerClose = () => setIsOpen(false)
  const toggle = () => setIsOpen((state) => !state)

  return { isOpen, triggerOpen, triggerClose, toggle }
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const { isOpen, triggerOpen, triggerClose, toggle } = useDropdown()

  const { pathname } = useRouter()

  const handleClick = useCallback(() => {
    const elem = document.querySelector('#newsletter')
    window.scrollTo({
      //@ts-ignore
      top: elem?.getBoundingClientRect().top * 0.98,
      behavior: 'smooth'
    })
  }, [])

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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger onMouseEnter={triggerOpen}>
              <Link
                className={clsx(
                  'text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150',
                  {
                    'border-aserto-lochivar-accent-30 text-aserto-grey-90':
                      pathname.includes('/product'),
                    'border-transparent text-aserto-grey-60':
                      !pathname.includes('/product')
                  }
                )}
                href="/"
              >
                Product
              </Link>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-aserto-grey-5 border border-aserto-grey-20 rounded-[4px] shadow-dropdown py-5 px-6 mt-3">
              <DropdownMenu.Item>
                <Link
                  href="/"
                  className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 border-transparent text-aserto-grey-60 mb-6"
                >
                  Benefits
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link
                  href="/"
                  className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 border-transparent text-aserto-grey-60"
                >
                  Features
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger onMouseEnter={triggerOpen}>
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
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-aserto-grey-5 border border-aserto-grey-20 rounded-[4px] shadow-dropdown py-5 px-6 mt-3">
              <DropdownMenu.Item>
                <Link
                  href="/"
                  className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 border-transparent text-aserto-grey-60 mb-6"
                >
                  Docs
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link
                  href="/"
                  className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 border-transparent text-aserto-grey-60"
                >
                  GitHub
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <Link
                  href="/"
                  className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 border-transparent text-aserto-grey-60"
                >
                  Slack community
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
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
          <Button variant="primary" size="sm" onClick={handleClick}>
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
