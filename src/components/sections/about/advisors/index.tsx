// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Components
import AdvisorItem from './advisor-item'

const advisors: React.ComponentPropsWithoutRef<typeof AdvisorItem>[] = [
  {
    name: 'Alex Bilmes',
    company: 'Stealth',
    position: 'Founder',
    linkedin: 'https://www.linkedin.com/in/bilmes/'
  },
  {
    name: 'Ameet Patel',
    company: 'Whisperer',
    position: 'Investor',
    linkedin: 'https://www.linkedin.com/in/ampatel/'
  },
  {
    name: 'Bob Muglia',
    company: 'Snowflake',
    position: 'Investor / Former CEO',
    linkedin: 'https://www.linkedin.com/in/bob-muglia-714ba592/'
  },
  {
    name: 'Christian Bach',
    company: 'Netlify',
    position: 'Co-founder/President',
    linkedin: 'https://www.linkedin.com/in/christianbachdk/'
  },
  {
    name: 'Jeff Fagnan',
    company: 'Accomplice',
    position: 'Founding Partner',
    linkedin: 'https://www.linkedin.com/in/jeff-fagnan-7b018/'
  },
  {
    name: 'Grant Miller',
    company: 'Replicated',
    position: 'Co-founder/CEO',
    linkedin: 'https://www.linkedin.com/in/grantlmiller/'
  },
  {
    name: 'Marc Campbell',
    company: 'Replicated',
    position: 'Co-founder/CTO',
    linkedin: 'https://www.linkedin.com/in/campbe79/'
  },
  {
    name: 'Mathias Biilmann',
    company: 'Netlify',
    position: 'Co-founder/CEO',
    linkedin:
      'https://www.linkedin.com/in/mathias-biilmann-christensen-a5a3805/'
  },
  {
    name: 'Sri Pangulur',
    company: 'Tribe Capital',
    position: 'Partner',
    linkedin: 'https://www.linkedin.com/in/sripangulur/'
  },
  {
    name: 'Tim Chen',
    company: 'Essence VC',
    position: 'Managing Partner',
    linkedin: 'https://www.linkedin.com/in/timchen/'
  },
  {
    name: 'Tom McInerney',
    company: '',
    position: 'Angel investor',
    linkedin: 'https://www.linkedin.com/in/tommcinerney/'
  },
  {
    name: 'Tom Preston-Werner',
    company: 'Github',
    position: 'Co-founder',
    linkedin: 'https://www.linkedin.com/in/mojombo/'
  }
]

const Advisors = () => {
  const [section] = useFadeInBottom()
  return (
    <section className="p-0">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            Angels and Advisors
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            Amazing support network
          </p>
        </div>
        <div className="grid w-full gap-12 mx-auto mt-20 gap-y-20 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <AdvisorItem {...advisor} key={advisor.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advisors
