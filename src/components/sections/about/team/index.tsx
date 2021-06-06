// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'

// Components
import ProfileItem from './profile-item'

const Team = ({ page }: { page: AboutPageFragment }) => {
  const [section] = useFadeInBottom()

  if (!page.teamSectionEnabled) return null
  return (
    <section className="mb-36 sm:mb-56">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.teamSectionTitle}
          </h2>
          <p className="max-w-5xl mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto px-12">
            {page.teamSectionSubtitle}
          </p>
        </div>
        <div className="grid gap-8 mx-auto mt-20 lg:grid-cols-3">
          {page.team?.map((member, i) => {
            if (!member) return null
            return <ProfileItem data={member} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
