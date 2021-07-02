// Primitives

import { NavBar, NavItem } from '@aserto/aserto-react-components'
import { sendEvent } from 'lib/ga'
import Button from 'components/primitives/button'
import Link from '../../primitives/link'

export const headerLinks = [
  {
    label: 'Developers',
    href: '',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.aserto.com/',
        isExternal: true
      },
      {
        label: 'GitHub',
        href: 'https://github.com/aserto-dev',
        isExternal: true
      },
      {
        label: 'Slack',
        href: 'https://asertocommunity.slack.com/join/shared_invite/zt-p06gin84-xNswWpTGyPDPxCz0LMux3g#/shared-invite/email',
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
  }
]

// const Header = () => {
//   const [open, setOpen] = useState(false)
//   const onClickCTA = () => {
//     sendEvent({
//       action: 'click',
//       params: {
//         event_label: 'Header Request Beta Access'
//       }
//     })
//   }
//   useEffect(() => {
//     if (open) {
//       document.documentElement.style.overflow = 'hidden'
//     } else {
//       document.documentElement.style.overflow = 'auto'
//     }
//   }, [open])
//
//   return (
//     <header className="fixed top-0 z-40 w-full px-6 py-3 bg-aserto-grey-5 shadow-header lg:py-0">
//       <div className="flex items-center justify-between w-full">
//         <nav className="flex items-center justify-between w-full lg:hidden">
//           <Link href="/">
//             <LogoMobile />
//           </Link>
//           <div className="relative w-6 h-6">
//             <MenuIcon
//               className={clsx('absolute transition-opacity duration-300', {
//                 'opacity-0 invisible': open
//               })}
//               onClick={() => setOpen(!open)}
//             />
//             <CloseIcon
//               className={clsx('absolute transition-opacity duration-300', {
//                 'opacity-0 invisible': !open
//               })}
//               onClick={() => setOpen(!open)}
//             />
//           </div>
//         </nav>
//         <nav className="items-center hidden space-x-10 lg:flex">
//           <Link href="/">
//             <Logo />
//           </Link>
//           <div className="bg-aserto-grey-20 w-[1px] h-9 mx-4" />
//           {headerLinks.map((each, idx) => (
//             <HeaderDropdownLink
//               key={idx}
//               id={idx}
//               link={{
//                 label: each.label,
//                 href: each.href ?? '',
//                 items: each.items.map((item) => ({
//                   href: item.href ?? '',
//                   label: item.label,
//                   isExternal: item.isExternal
//                 }))
//               }}
//             />
//           ))}
//         </nav>
//         <div className="hidden lg:block">
//           <NextLink href="/#sign-up" passHref>
//             <Button
//               variant="primary"
//               size="sm"
//               as="a"
//               className="inline-flex items-center"
//               onClick={onClickCTA}
//             >
//               Request Beta Access
//             </Button>
//           </NextLink>
//           <Link
//             className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-60 border-aserto-grey-20"
//             href="https://console.aserto.com/"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//       <Menu show={open} closeMenu={() => setOpen(false)} />
//     </header>
//   )
// }

const Header = () => {
  const onClickCTA = () => {
    sendEvent({
      action: 'click',
      params: {
        event_label: 'Header Request Beta Access'
      }
    })
  }
  return (
    <NavBar showBrandSeparator>
      <>
        <ul>
          {headerLinks.map((headerLink, index) => {
            return (
              <NavItem key={headerLink.href}>
                <Link
                  variant="nav"
                  href={headerLink.href}
                  style={{
                    paddingBottom: 31,
                    cursor: 'pointer'
                  }}
                  className={`${index === 0 ? 'router-link-exact-active' : ''}`}
                >
                  {headerLink.label}
                </Link>
              </NavItem>
            )
          })}
        </ul>
        <div
          className="hidden lg:block"
          style={{
            padding: 24
          }}
        >
          <Button
            variant="primary"
            size="sm"
            className="inline-flex items-center"
            onClick={onClickCTA}
          >
            Request Beta Access
          </Button>
          <a
            className="pl-6 ml-8 text-base font-medium border-l font-roboto text-aserto-grey-60 border-aserto-grey-20 hover:text-aserto-grey-90"
            href="https://console.aserto.com/"
          >
            Sign In
          </a>
        </div>
      </>
    </NavBar>
  )
}

export default Header
