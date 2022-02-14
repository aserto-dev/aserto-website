// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { AboutPageFragment } from 'lib/sanity/generated'

// Style
import s from './founder.module.css'

// Components
import Image from '../../../primitives/image'

const Founders = ({ page }: { page: AboutPageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section id="founders" className="pt-8 mb-36 sm:mb-56 border-aserto-grey-20 border-t-1">
      <div className="mx-auto" ref={section}>
        <div className="text-center">
          <h2 className="mb-2 text-5xl tracking-tight text-aserto-grey-90 sm:mb-10">
            {page.foundersSectionTitle}
          </h2>
          <p className="max-w-[800px] mx-auto text-lg text-aserto-grey-60 sm:text-1.5xl font-roboto">
            {page.foundersSectionSubtitle}
          </p>
        </div>
        <div
          className="flex lg:mt-10 md:mt-12 mt-12 flex-wrap mx-auto"
          style={{
            maxWidth: 980
          }}
        >
          <div className="mx-auto lg:mb-0 md:mb-0 mb-10">
            <Image
              layout="native"
              width={304}
              height={389}
              src="/images/about/gert-omri.jpg"
            />
          </div>
          <div className={`flex-1 text-lg px-10 lg:pr-0 ${s['founders-text']}`}>
            <div className="flex items-center mb-4 text-aserto-grey-90 font-bold">
              Gert Drapers, CTO
              <Image
                onClick={() =>
                  window.open('https://www.linkedin.com/in/gertd/')
                }
                src="/images/about/linkedIn.svg"
                className="ml-2 cursor-pointer"
                layout="native"
              />
            </div>
            <div className="flex items-center mb-4 text-aserto-grey-90 font-bold">
              Omri Gazitt, CEO
              <Image
                onClick={() =>
                  window.open('https://www.linkedin.com/in/ogazitt/')
                }
                src="/images/about/linkedIn.svg"
                className="ml-2 cursor-pointer"
                layout="native"
              />
            </div>
            <div className={`text-aserto-grey-60 text-lg	mt-10 `}>
              Omri and Gert have spent over 6 decades between them working on
              developer products at tech giants like Microsoft, HP Cloud,
              Splunk, and Hulu, as well as startups like NEON and Puppet.
              <br />
              <br />
              They met at Microsoft while working on developer-facing products
              like .NET, SQL Server, Visual Studio, Azure, and Active Directory.
              Aserto is their fourth journey together, inspired by a question
              they were both asking: &quot;what would a modern authorization
              solution look like in the age of SaaS and Cloud?&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders
