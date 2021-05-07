import Button from 'components/primitives/button'
import Link from 'components/primitives/link'

import Logo from 'icons/logo-header.svg'

const Header = () => {
  return (
    <header className="sticky px-6 py-3 bg-ds-black shadow-header">
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-11">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            className="text-base font-medium font-book text-ds-gray-7"
            href="/blog"
          >
            Blog
          </Link>
        </nav>
        <Button as={Link} href="#" variant="primary" size="sm">
          Get early access
        </Button>
      </div>
    </header>
  )
}

export default Header
