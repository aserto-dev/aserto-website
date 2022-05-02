import Link from 'components/primitives/link'
import Container from '../container'
import CodeBrowser from './code-browser.tsx'

const Intro = () => {
  return (
    <Container className="text-aserto-grey-90 lg:px-12">
      <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
        Powerful authorization-as-a-service,
        <br /> built to evolve with your customer requirements.
      </h1>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:translate-y-1/3 mb-8 mx-4">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Zero-to-RBAC in under a day <br className="hidden xl:block" />
            for any language or framework.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative md:flex md:flex-row md:justify-center">
          <CodeBrowser />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:order-2 xl:translate-y-1/3 mb-8 mx-4">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Scale up to enterprise requirements with{' '}
            <br className="hidden xl:block" />
            deep IDP integration, ABAC, fine-grained{' '}
            <br className="hidden xl:block" />
            access control, audit trails, and custom roles.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative xl:order-1 flex flex-row justify-center">
          <img
            className="w-[700px]"
            src="images/homepage/intro/elastic-rego.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:translate-y-1/3 mb-8 mx-4">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Deploy the authorizer as a sidecar or{' '}
            <br className="hidden xl:block" />
            microservice in your cloud, providing{' '}
            <br className="hidden xl:block" />
            millisecond latency and 100% availability.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative flex flex-row justify-center">
          <img
            className="w-[700px]"
            src="images/homepage/intro/kubernetes-pod.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:order-2 xl:translate-y-1/3 mb-8 mx-4 xl:ml-28">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Integrate with your identity provider, artifact registry,{' '}
            <span className="whitespace-nowrap">
              logging system, tech stack.
            </span>
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative xl:order-1 flex flex-row justify-center">
          <img
            className="w-[700px]"
            src="images/homepage/intro/aserto-control-plane.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:translate-y-1/3 mb-8 mx-4">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Open source toolchain based on LF/CNCF Projects such as{' '}
            <span className="whitespace-nowrap">OPA, OCI, and Sigstore.</span>
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative flex flex-row justify-center">
          <img
            className="w-[700px]"
            src="images/homepage/intro/authorizer.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col xl:flex-row justify-evenly mb-40 xl:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden xl:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center xl:text-left xl:order-2 xl:translate-y-1/3 mb-8 mx-4 xl:ml-28">
          <p className="sm:w-9/12 lg:w-1/2 xl:w-full mx-auto">
            Leverage familiar container workflows, policy-as-code,{' '}
            <span className="whitespace-nowrap">
              and GitOps best practices.
            </span>
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative xl:order-1 flex flex-row justify-center">
          <img
            className="w-[700px]"
            src="images/homepage/intro/source-code-workflows.png"
          />
        </div>
      </div>
    </Container>
  )
}

export default Intro
