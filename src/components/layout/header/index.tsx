import { useCallback, useEffect, useState } from 'react'

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

const Header = () => {
  const [open, setOpen] = useState(false)

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
    <header className="fixed top-0 z-40 w-full px-6 bg-aserto-grey-5 shadow-header">
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
          <div className='bg-aserto-grey-20 w-[1px] h-9 mx-5' />
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60 py-8"
            href="/"
          >
            Product
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60 py-8"
            href="/"
          >
            Developers
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60 py-8"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60 py-8"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60 py-8"
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
