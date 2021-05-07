import Link from 'components/primitives/link'
import { useMemo } from 'react'
import Container from '../container'

const FooterSection = () => {
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])

  return (
    <footer className="bg-ds-background">
      <Container className="pt-14">
        <div className="grid gap-8 mx-auto lg:grid-cols-5">
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
                  href="/"
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
          <ul>
            <li>
              <p className="font-bold leading-normal tracking-wide text-white uppercase font-book">
                Social
              </p>
            </li>
          </ul>
        </div>
        <p className="text-base text-center sm:mt-8 text-ds-gray font-book">
          &copy; {year} Aserto, Inc. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default FooterSection
