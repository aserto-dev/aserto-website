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
    <footer className="bg-aserto-black">
      <Container className="pb-10 pt-14">
        <div className="grid gap-8 pb-20 mx-auto lg:grid-cols-5" ref={ref}>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-roboto">
              Product
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Aserto OneBox
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-roboto">
              Community
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Slack
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-roboto">
              Company
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide text-white uppercase font-roboto">
              Legal
            </p>
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
                  href="/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-white font-roboto"
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
          <p className="mt-6 text-base text-white font-roboto">
            &copy; {year} Aserto, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
