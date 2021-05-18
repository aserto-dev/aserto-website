// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Primitives
import Link from 'components/primitives/link'
import Image from 'next/image'

// Styles
import s from './hero.module.css'

const Hero = () => {
  const [ref] = useFadeInBottom()

  return (
    <section className={`mx-auto pt-44 sm:pt-80 pb-44 ${s.background}`}>
      <div className={s.background}>
        <Image
          src="/images/about/background2.png"
          width={1440}
          height={1068}
          objectFit="cover"
        />
      </div>
      <div className={`relative z-10 pt-3 text-center ${s.content}`} ref={ref}>
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl mb-14 sm:mb-0">
          Authorization is broken
        </h1>
        <p className="w-full mx-auto mt-5 text-base text-left md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-10 md:text-2xl sm:w-10/12 font-roboto">
          At Aserto, we want to help every SaaS application become a great
          enterprise application. Meeting the enterprise bar requires
          fine-grained permissions, role- and attribute-based access control,
          flexible and custom roles, integration with numerous enterprise
          identity providers and directories, and complete authorization logs to
          meet a growing list of data and privacy compliance standards.
          <br />
          <br />
          Today, engineering teams have to invest considerable effort in
          building, maintaining, and evolving a “table stakes” set of
          capabilities that are tricky to get right, yet aren’t visible to the
          end-user and don’t offer meaningful differentiation.
          <br />
          <br />
          From the enterprise customer’s perspective, the IT teams that operate
          these SaaS applications have to live in dozens (or hundreds) of
          different permissions consoles - a fractured, error-prone, frustrating
          experience resulting in misconfigurations, data leaks, and manual,
          soul-crushing compliance audits. No wonder everyone we talk to feels
          like{' '}
          <Link href="/" variant="color" className={s.link}>
            authorization is broken!
          </Link>
          <br />
          <br />
          At Aserto, we want to address these pain points at the source: by
          creating a simple, opinionated framework that engineers can use to
          easily incorporate authorization into their applications.
          <br />
          <br />
          Engineers win by integrating a modern, cloud-native service instead of
          having to reinvent the wheel. SaaS vendors win by shortening sales
          cycles with an enterprise-ready set of authorization capabilities,
          satisfying the infamous “enterprise requirements spreadsheet”. IT
          teams win by leveraging consistent, reusable authorization policies
          across their applications. Compliance teams win by having
          comprehensive authorization logs that help them easily meet audit
          requirements.
        </p>
      </div>
    </section>
  )
}

export default Hero
