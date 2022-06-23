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
    <footer className="bg-aserto-grey-5">
      <Container className="pb-10 pt-14">
        <div
          className="grid grid-cols-2 gap-8 pb-12 mx-auto lg:grid-cols-5"
          ref={ref}
        >
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Developers
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="https://docs.aserto.com/docs/"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="https://github.com/aserto-dev"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg"
                >
                  Community Slack
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="https://openpolicyregistry.io"
                >
                  Open Policy Registry
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="https://aserto.statuspage.io/"
                >
                  Service Status
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-start-2 lg:row-auto">
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Product
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/benefits"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/customers"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-start-1 lg:row-start-auto">
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
                  href="/news"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/contact"
                >
                  Contact us
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
                  href="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Social
            </p>
            <ul className="mt-4 flex items-center space-x-6">
              <li>
                <Link href="https://twitter.com/aserto_com">
                  <span className="sr-only">Twitter</span>
                  <IconTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://aserto.medium.com/">
                  <span className="sr-only">Medium</span>
                  <IconCommunity />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/aserto-com">
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
