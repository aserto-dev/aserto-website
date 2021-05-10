// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import AdvisorItem from './advisor-item'

const advisors: React.ComponentPropsWithoutRef<typeof AdvisorItem>[] = [
  {
    name: 'Alex Bilmes',
    company: 'Stealth',
    position: 'Founder',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Ameet Patel',
    company: '-',
    position: 'Investor/Whisperer',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Bob Muglia',
    company: 'Snowflake',
    position: 'Investor / Former CEO',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Christian Bach',
    company: 'Netlify',
    position: 'Co-founder/President',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Jeff Fagnan',
    company: 'Accomplice',
    position: 'Founding Partner',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Grant Miller',
    company: 'Replicated',
    position: 'Co-founder/CEO',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Marc Campbell',
    company: 'Replicated',
    position: 'Co-founder/CTO',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mathias Biilmann',
    company: 'Netlify',
    position: 'Co-founder/CTO',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Sri Pangulur',
    company: 'Trace Data',
    position: 'Head of Business',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Tim Chen',
    company: 'Essence Vc',
    position: 'Head of Business',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Tom McInerney',
    company: '-',
    position: 'Angel investor',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Tom Preston-Werner',
    company: 'Github',
    position: 'Co-founder',
    linkedin: 'https://linkedin.com'
  }
]

const Advisors = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="pt-0 pb-52">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90 sm:mb-10 sm:text-5xl">
            Angels and Advisors
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            Amazing support network
          </p>
        </div>
        <div className="grid w-full gap-12 mx-auto mt-20 gap-y-16 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <AdvisorItem {...advisor} key={advisor.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisors
