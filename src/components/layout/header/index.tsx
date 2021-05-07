import Button from 'components/primitives/button'
import Link from 'components/primitives/link'
import Container from '../container'

import Logo from 'icons/logo-footer.svg'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-14">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="space-x-11">
            <Link variant="nav" href="/blog">
              Blog
            </Link>
            <Button as={Link} href="#" variant="primary">
              Get early access
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
