import Button from 'components/primitives/button'
import Link from 'components/primitives/link'
import Logo from 'components/primitives/logo'
import Container from '../container'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-14">
          <Logo />
          <nav className="space-x-11">
            <Link variant="nav" href="/blog">
              Blog
            </Link>
            <Link variant="nav" href="/about">
              About
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
