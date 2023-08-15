import clsx from 'clsx'
import HubspotForm from '../../../../lib/hubspot/HubspotForm'

// Layout
import Container from 'components/layout/container'

// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'

// Styles
import s from './newsletter.module.css'

export type NewsletterProps = {
  title: string
  description: string
}

const NewsletterSection = ({ title, description }: NewsletterProps) => {
  const [section] = useFadeInBottom()

  return (
    <section
      className="relative z-10 mb-32 bg-aserto-black"
      id="sign-up"
      ref={section}
    >
      <Container>
        <div
          className={clsx(
            'px-6 py-6 rounded-lg md:py-16 md:px-16 flex flex-col md:flex-row md:items-center md:justify-evenly text-center md:text-left',
            s.background
          )}
        >
          <div className="w-full md:w-6/12">
            <h2 className="tracking-normal text-aserto-grey-90 text-4.5xl">
              {title}
            </h2>
            <p className="max-w-3xl mt-4 text-lg text-aserto-grey-70 font-roboto">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center my-8 md:my-0 md:mx-7">
            <HubspotForm formId="0ba34fad-afcf-4dde-8b51-b73c32c9595c" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSection
