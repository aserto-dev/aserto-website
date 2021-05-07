import { useMemo } from 'react'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Link from 'components/primitives/link'

// Layout
import Container from '../container'

// Icons
import IconLinkedin from 'icons/linkedin.svg'
import IconMedium from 'icons/medium.svg'
import IconTwitter from 'icons/twitter.svg'
import Logo from 'icons/logo-footer.svg'

const Footer = () => {
  const [ref] = useFadeInBottom()
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])

  return (
    <footer className="bg-ds-background">
      <Container className="pb-10 pt-14">
        <div className="grid gap-8 pb-20 mx-auto lg:grid-cols-5" ref={ref}>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-book">
              Product
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Aserto OneBox
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-book">
              Community
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Slack
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-book">
              Company
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-book">
              Legal
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-book"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center space-x-6">
              <li>
                <Link href="/">
                  <span className="sr-only">Twitter</span>
                  <IconTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="sr-only">Medium</span>
                  <IconMedium />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="sr-only">Linkedin</span>
                  <IconLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link href="/">
            <span className="sr-only">Aserto</span>
            <Logo />
          </Link>
          <p className="mt-6 text-base text-white font-book">
            &copy; {year} Aserto, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
