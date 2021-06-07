// Hooks
import { useFadeInBottom } from 'hooks/use-gsap'
import { HomePageFragment } from 'lib/sanity/generated'
import IntroItem from './intro-item'
import Image from '../../../primitives/image'

// Components

const Intro = ({ page }: { page: HomePageFragment }) => {
  const [section] = useFadeInBottom()
  return (
    <section className="mt-10 lg:py-2">
      <div className="mx-auto" ref={section}>
        {page.infos?.map((info, i) => {
          if (!info) return null
          return (
            <div
              key={info?.title}
              className={`flex mt-32 flex-wrap justify-center font-roboto ${
                i === 1
                  ? 'items-center sm:flex-col-reverse md:items-start lg:items-start md:flex-row-reverse lg:flex-row-reverse'
                  : ''
              }`}
              id={`intro-${i + 1}`}
            >
              <div className="lg:w-80 md:w-56 w-52">
                <Image
                  src={String(info.imagePath)}
                  alt="value"
                  layout="responsive"
                />
              </div>
              <div
                className={`flex-1 mt-10 md:mt-auto lg:mt-auto ${
                  i != 1 ? 'lg:ml-20 md:ml-20' : 'lg:mr-20 md:mr-20'
                }`}
                style={{
                  minWidth: 346
                }}
              >
                <h2
                  className="mb-2 tracking-tight text-aserto-grey-90 font-roboto"
                  style={{
                    fontSize: 32
                  }}
                >
                  {info.title}
                </h2>
                <h4 className="text-xl text-aserto-grey-90">{info.subtitle}</h4>
                <div className="mt-4 text-lg">
                  {info?.items?.map((item) => {
                    return (
                      <IntroItem
                        key={item?.title}
                        image={String(item?.image?.asset?.url)}
                        text={String(item?.title)}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}

        {/*<div*/}
        {/*  className="flex mt-32 flex-wrap justify-center items-center flex-col-reverse md:flex-row lg:flex-row md:items-start lg:items-start "*/}
        {/*  id="intro-2"*/}
        {/*>*/}
        {/*  <div className="flex-1 lg:mr-20 mt-10 mx-auto md:mt-auto lg:mt-auto">*/}
        {/*    <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90">*/}
        {/*      Authorization as easy as an API call*/}
        {/*    </h2>*/}
        {/*    <h4 className="text-sm text-aserto-grey-90">*/}
        {/*      Add powerful authorization capabilities that scale up with your*/}
        {/*      application in a fraction of the time it would take to build it by*/}
        {/*      hand.*/}
        {/*    </h4>*/}
        {/*    <div className="mt-4">*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/padlock.svg"*/}
        {/*        text="Supports fine-grained role- and attribute-based access control."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/zero-trust.svg"*/}
        {/*        text="Applies zero-trust security principles, secure by default."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/reduces-stale-permissions.svg"*/}
        {/*        text="Eliminates the risk of stale permissions resulting in unauthorized access."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/centralized-management.svg"*/}
        {/*        text="Centralized management of decision logs, audit trails, alerting."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/simplifies-compliance.svg"*/}
        {/*        text="Simplifies compliance through comprehensive authorization logs."*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="lg:w-80 md:w-56 w-52">*/}
        {/*    <Image*/}
        {/*      src="/images/homepage/intro/enterprise-ready-circle.svg"*/}
        {/*      alt="value"*/}
        {/*      layout="responsive"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="flex mt-32 flex-wrap justify-center" id="intro-3">*/}
        {/*  <div className="lg:w-80 md:w-56 w-52">*/}
        {/*    <Image*/}
        {/*      src="/images/homepage/intro/gitops-circle.svg"*/}
        {/*      alt="value"*/}
        {/*      layout="responsive"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="flex-1 lg:ml-20 mt-10 md:mt-auto lg:mt-auto">*/}
        {/*    <h2 className="mb-2 text-3xl tracking-tight text-aserto-grey-90">*/}
        {/*      Authorization as easy as an API call*/}
        {/*    </h2>*/}
        {/*    <h4 className="text-sm text-aserto-grey-90">*/}
        {/*      Add powerful authorization capabilities that scale up with your*/}
        {/*      application in a fraction of the time it would take to build it by*/}
        {/*      hand.*/}
        {/*    </h4>*/}
        {/*    <div className="mt-4" id="2">*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/versioned.svg"*/}
        {/*        text="Policy is stored and versioned in a repository, just like application and infrastructure code."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/policy-is-built.svg"*/}
        {/*        text="Policy is built into a versioned image, just like a container."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/policy-changes.svg"*/}
        {/*        text="Policy changes are built, tested, and deployed in an automated GitOps workflow, and don’t require redeploying the app."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/customers-adapt-roles.svg"*/}
        {/*        text="Customers can adapt roles and permissions to their needs in a self-service manner."*/}
        {/*      />*/}
        {/*      <IntroItem*/}
        {/*        image="/images/homepage/intro/policy-changes-traced-back.svg"*/}
        {/*        text="Policy changes can be traced back to a git commit, meeting auditing requirements out of the box."*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default Intro
