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
      className="relative flex items-center h-20"
      tabIndex={0}
    >
      <a
        style={{paddingTop: "7px"}}
        className="text-base font-roboto transition-all duration-150 text-aserto-grey-60 hover:text-aserto-grey-90 cursor-pointer"
        onMouseEnter={() => setShowMenu(true)}
        onSelect={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onBlur={() => setShowMenu(false)}
        onFocus={() => setShowMenu(true)}
      >
        {link.label}
      </a>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{ display: showMenu ? 'flex' : 'none', left: '-40px' }}
        className="text-aserto-grey-60 absolute top-10 w-48 bg-aserto-grey-5 border-solid border-aserto-grey-30 rounded px-4 pt-4 border flex flex-col cursor-pointer"
      >
        {link.items?.map((item) => (
          <a
            key={item.href}
            className={
              'pb-6 bg-aserto-grey-5 transition-all duration-150 text-aserto-grey-60 hover:text-aserto-grey-90'
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
