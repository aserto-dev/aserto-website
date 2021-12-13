import { HeaderLink } from './header-dropdown-link'
import React, { useState } from 'react'

type HeaderDropdownMenuProps = {
  link: HeaderLink
}
const HeaderDropdownMenu: React.FC<HeaderDropdownMenuProps> = ({ link }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div
      role="button"
      className="relative"
      tabIndex={0}
      onBlur={() => setShowMenu(false)}
      onFocus={() => setShowMenu(true)}
    >
      <a
        className="text-base font-roboto pb-6 pt-8 border-b border-solid transition-all duration-150 text-aserto-grey-60 hover:text-aserto-grey-90 cursor-pointer"
        onMouseEnter={() => setShowMenu(true)}
        onSelect={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {link.label}
      </a>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{ display: showMenu ? 'flex' : 'none', left: '-40px' }}
        className="text-aserto-grey-60 absolute top-10 w-48 bg-aserto-grey-5 border-solid border-aserto-grey-30 rounded p-4 border flex flex-col cursor-pointer"
      >
        {link.items?.map((item, index) => (
          <a
            key={item.href}
            className={
              link.items && index < link.items?.length - 1
                ? 'pb-6 bg-aserto-grey-5'
                : 'bg-aserto-grey-5'
            }
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeaderDropdownMenu
