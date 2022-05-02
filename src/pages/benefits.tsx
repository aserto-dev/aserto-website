import PageLayout from 'components/layout/page'
import Button from 'components/primitives/button'
import CustomHead from 'components/primitives/custom-head'
import Hero from 'components/sections/benefits/hero'
import Video from 'components/sections/benefits/video'
import Container from 'components/sections/homepage/container'

const Benefits = () => {
  return (
    <PageLayout
      footer="regular"
      headProps={{
        title: 'Aserto Benefits',
        description: 'Aserto Benefits',
        image: 'images/og.png'
      }}
    >
      <CustomHead
        title="Aserto - Benefits"
        description="Aserto solution benefits for cloud-native authorization"
        image="images/og.png"
      />
      <Hero />
      <Video embed="https://www.youtube.com/embed/RJkgmdjJn_w" />
      <Container className="text-aserto-grey-90">
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Map your APIs to permissions, and assign them to flexible roles
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Get started easily by importing your permissions from your API
              contracts.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Create a set of extensible roles and assign them to users and
              groups.
            </p>
          </div>
          <div className="xl:relative flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/permissions.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Industrial-strength policy engine{' '}
          <span className="whitespace-nowrap">under the hood</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-100 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:order-2 xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              Easily evolve from simple RBAC to enterprise-ready ABAC and
              fine-grained access control access control, audit trails, and
              custom roles.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              Create policies that both control access and drive front-end
              behavior.
            </p>
          </div>
          <div className="xl:relative xl:order-1 flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/abac.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          The same authorizer, deployed in{' '}
          <span className="whitespace-nowrap">our cloud or yours</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Use our hosted authorizer to develop your application without
              deploying anything.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Minimize latency and maximize availability in production by
              deploying the authorizer as a sidecar or microservice in your
              cloud.
            </p>
          </div>
          <div className="xl:relative flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/Evaluator.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Easy to integrate into your tech stack
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-100 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:order-2 xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              API-first design with gRPC and REST bindings for every operation.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              SDKs for popular languages and frameworks - node.js, Golang,
              gorilla/mux, python, flask, .NET, React, and more coming every
              week.
            </p>
          </div>
          <div className="xl:relative xl:order-1 flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/Frameworks.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Picks up where your identity provider{' '}
          <span className="whitespace-nowrap">leaves off</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Connect your identity providers to the Aserto directory as the
              source of truth for user data.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Control the mapping between IDP attributes and the Aserto
              directory.
            </p>
          </div>
          <div className="xl:relative flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/Connections.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Treat policies as code, and build them into immutable,{' '}
          <span className="whitespace-nowrap">signed images</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Create a policy-as-code workflow using your source code provider.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Build, tag, push, pull policy images in your container registry,
              or use ours.
            </p>
          </div>
          <div className="xl:relative flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/demo-policy.gif" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Enterprise-ready audit trails for every{' '}
          <span className="whitespace-nowrap">authorization decision</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-100 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:order-2 xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              Accelerate your path to SOC 2 and ISO 27001 with centralized audit
              trails for every authorization decision.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4 xl:ml-auto">
              Stream your decision logs into your log management systems / SIEM.
            </p>
          </div>
          <div className="xl:relative xl:order-1 flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/Elastic.png" />
          </div>
        </div>
        <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
          Built on an <span className="whitespace-nowrap">open foundation</span>
        </h1>
        <div className="xl:relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72">
          <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
          <div className="sm:w-9/12 mx-auto xl:translate-y-1/3 mb-8">
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Leverages the best of the open cloud native ecosystem.
            </p>
            <br />
            <p className="text-[20px] xl:w-[500px] text-center xl:text-left mx-4">
              Open source toolchain you can use standalone, or manage using our
              control plane.
            </p>
          </div>
          <div className="xl:relative flex flex-row justify-center">
            <img className="w-[700px]" src="images/benefits/Authorizer.png" />
          </div>
        </div>
      </Container>
      <Container className="bg-benefitsCta py-[180px] text-aserto-grey-90 text-center">
        <div>
          <img
            className="w-[480px] h-[350px] object-cover mx-auto"
            src="images/lottie.png"
            alt="Lottie"
          />
          <h2 className="text-[36px] font-medium">{`Let's talk about your authorization challenges`}</h2>
          <div className="my-[50px]">
            <Button
              variant="primary"
              size="sm"
              as="a"
              className="bg-white text-black inline-flex items-center cursor-pointer"
              href="/contact"
            >
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}

export default Benefits
