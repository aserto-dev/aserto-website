import clsx from 'clsx'

// Styles
import { headerLinks } from '..'
import { HeaderDropdownLinkMobile } from '../header-dropdown-link'
import NoSSR from 'components/sections/common/NoSSR'

type MenuProps = {
  show: boolean
  closeMenu: () => void
  signupRedirect: () => void
}

const Menu = ({ show = false, closeMenu /*, signupRedirect */ }: MenuProps) => {
  return (
    <section
      className={clsx(
        'left-0 z-20 w-full pb-16 right-1 bg-aserto-grey-5 transition-opacity duration-300',
        { 'opacity-0 pointer-events-none hidden': !show }
      )}
      aria-hidden={!show}
    >
      <nav className="w-full">
        <ul className="w-full border-b border-aserto-grey-20">
          {headerLinks.map((l, i) => {
            return (
              <li key={i} className="relative">
                <NoSSR>
                  <HeaderDropdownLinkMobile
                    link={l}
                    id={`mobile-${i}`}
                    onSelect={closeMenu}
                  />
                </NoSSR>
              </li>
            )
          })}
          {/*
          <li
            className="flex relative bg-aserto-lochivar-100 w-full px-6 items-center h-16
            border-t border-aserto-grey-20 text-aserto-grey-90 text-xl font-semibold"
          >
            <span
              onClick={() => {
                closeMenu()
                signupRedirect()
              }}
            >
              Try it FREE
            </span>
          </li>
          */}
        </ul>
      </nav>
    </section>
  )
}

export default Menu
