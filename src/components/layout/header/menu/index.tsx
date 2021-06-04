import { useMemo } from 'react'
import clsx from 'clsx'

// Primitives
import Link from 'components/primitives/link'

// Icons
import Logo from 'icons/logo-footer.svg'

// Styles
import s from './menu.module.css'
import { headerLinks } from '..'
import { HeaderDropdownLinkMobile } from '../header-dropdown-link'

type MenuProps = {
  show: boolean
  closeMenu: () => void
}

const Menu = ({ show = false, closeMenu }: MenuProps) => {
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])
  return (
    <section
      className={clsx(
        'fixed left-0 z-20 w-full px-6 py-3 right-1 bg-aserto-grey-5 transition-opacity duration-300',
        s.menu,
        { 'opacity-0 pointer-events-none': !show }
      )}
      aria-hidden={!show}
    >
      <nav className="w-full mt-6">
        <ul className="w-full text-center space-y-7">
          {headerLinks.map((l, i) => {
            if (l.label === 'Product' || l.label === 'Developers') return
            return (
              <li key={i} className="pb-7">
                <HeaderDropdownLinkMobile
                  link={l}
                  id={`mobile-${i}`}
                  onSelect={closeMenu}
                />
              </li>
            )
          })}
        </ul>
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block mx-auto">
            <span className="sr-only">Aserto</span>
            <Logo />
          </Link>
          <p className="mt-6 text-base text-aserto-grey-60 font-roboto">
            &copy; {year} Aserto, Inc. All rights reserved.
          </p>
        </div>
      </nav>
    </section>
  )
}

export default Menu
