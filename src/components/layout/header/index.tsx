import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

import Logo from 'icons/logo-header.svg'

const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full px-6 py-3 bg-aserto-grey-5 shadow-header">
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-11">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-base font-medium font-roboto text-aserto-grey-60"
            href="/careers"
          >
            Careers
          </Link>
        </nav>
        <div>
          <Button as={Link} href="#" variant="primary" size="sm">
            Request Early Access
          </Button>
          <Link
            className="ml-8 text-base font-medium font-roboto text-aserto-grey-60"
            href="/careers"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
