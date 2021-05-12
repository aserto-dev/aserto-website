import { useMemo } from 'react'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Link from 'components/primitives/link'

// Layout
import Container from '../container'

// Icons
import IconLinkedin from 'icons/linkedin.svg'
import IconCommunity from 'icons/community.svg'
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
        <div
          className="grid grid-cols-2 gap-8 pb-12 mx-auto lg:grid-cols-5"
          ref={ref}
        >
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Product
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Developers
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Slack
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Company
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Contact us
                  <svg
                    className="inline-block ml-2"
                    width="16"
                    height="17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.666 3.167h10.667c.733 0 1.333.6 1.333 1.333v8c0 .734-.6 1.334-1.333 1.334H2.666c-.733 0-1.333-.6-1.333-1.334v-8c0-.733.6-1.333 1.333-1.333z"
                      stroke="#A0A0A0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.666 4.5L8 9.167 1.333 4.5"
                      stroke="#A0A0A0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Legal
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
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
                  <IconCommunity />
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
          <p className="mt-6 text-base text-aserto-grey-60 font-roboto">
            &copy; {year} Aserto, Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
