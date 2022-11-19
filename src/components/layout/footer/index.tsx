import { useMemo } from 'react'
import props from 'lib/menu-items'
import { ResourceFragment, UseCaseFragment } from 'lib/sanity/generated'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Link from 'components/primitives/link'

// Layout
import Container from '../container'

// Icons
import IconLinkedin from 'icons/linkedin.svg'
import IconGithub from 'icons/github.svg'
import IconSlack from 'icons/slack.svg'
import IconTwitter from 'icons/twitter.svg'
import Logo from 'icons/logo-footer.svg'

const Footer = () => {
  const [ref] = useFadeInBottom()
  const year = useMemo(() => {
    return new Date().getUTCFullYear()
  }, [])

  const { resources, useCases } = props as unknown as {
    resources: ResourceFragment[]
    useCases: UseCaseFragment[]
  }

  return (
    <footer className="bg-aserto-grey-5">
      <Container className="pb-10 pt-14">
        <div
          className="grid grid-cols-2 gap-8 pb-12 mx-auto lg:grid-cols-7"
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
                  href="/benefits"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/features"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/see-demo"
                >
                  See a demo
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/integrations"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/frameworks"
                >
                  Frameworks
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
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Use Cases
            </p>
            <ul className="mt-4 space-y-4">
              {useCases.map((uc) => (
                <li key={uc._id}>
                  <Link
                    className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                    href={`/use-cases/${uc.slug?.current}`}
                  >
                    {uc.shortFooterTitle}
                  </Link>
                </li>
              ))}
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
                  href="https://docs.aserto.com/docs/"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                  href="/quickstarts"
                >
                  Quickstarts
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
                  href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg"
                >
                  Community Slack
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
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Company
            </p>
            <ul className="mt-4 space-y-4">
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
                  href="/events"
                >
                  Events
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
                  href="/contact"
                >
                  Contact
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
            </ul>
          </div>
          <div>
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Resources
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
                  href="/customers"
                >
                  Success stories
                </Link>
              </li>
              {resources.map((r) => (
                <li key={r._id}>
                  <Link
                    className="text-sm leading-normal text-aserto-grey-60 font-roboto"
                    href={`/resources/${r.slug?.current}`}
                  >
                    {r.shortTitle}
                  </Link>
                </li>
              ))}
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
            <ul className="mt-5 flex items-center space-x-6">
              <li>
                <Link href="https://github.com/aserto-dev">
                  <span className="sr-only">GitHub</span>
                  <IconGithub />
                </Link>
              </li>
              <li>
                <Link href="https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg">
                  <span className="sr-only">Slack</span>
                  <IconSlack />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/aserto_com">
                  <span className="sr-only">Twitter</span>
                  <IconTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/aserto-com">
                  <span className="sr-only">Linkedin</span>
                  <IconLinkedin />
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <p className="mt-10 font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
                Certification
              </p>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="https://trust.aserto.com">
                    <span className="sr-only">SOC 2 Type 2</span>
                    <div className="flex">
                      <img
                        className="h-[50px] md:h-[70px] lg:h-[70px]"
                        src="/images/soc2.png"
                        alt="SOC 2 Type 2"
                      />
                      <p className="hidden md:flex lg:flex mt-4 ml-3 text-sm text-aserto-grey-60 font-roboto">
                        SOC 2<br />
                        Type 2
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden">
            <p className="font-bold leading-normal tracking-wide uppercase text-aserto-grey-90 font-roboto">
              Certification
            </p>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="https://trust.aserto.com">
                  <span className="sr-only">SOC 2 Type 2</span>
                  <div className="flex">
                    <img
                      className="h-[30px]"
                      src="/images/soc2.png"
                      alt="SOC 2 Type 2"
                    />
                    <p className="hidden md:flex mt-1 ml-2 text-sm text-aserto-grey-60 font-roboto">
                      SOC 2 Type 2 Certified
                    </p>
                    <p className="md:hidden mt-1 ml-2 text-sm text-aserto-grey-60 font-roboto">
                      SOC 2 Type 2
                    </p>
                  </div>
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
