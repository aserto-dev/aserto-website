import Link from 'components/primitives/link'
import Container from '../container'
import CodeBrowser from './code-browser.tsx'

const Intro = () => {
  return (
    <Container className="text-aserto-grey-90">
      <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
        Powerful authorization-as-a-service,
        <br /> built to evolve with your customer requirements.
      </h1>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:translate-y-1/3 mb-8 mx-4">
          <p>
            Zero-to-RBAC in under a day <br className="hidden md:block" />
            for any language or framework.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative">
          <CodeBrowser />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:order-2 md:translate-y-1/3 mb-8 mx-4">
          <p>
            Scale up to enterprise requirements with{' '}
            <br className="hidden md:block" />
            deep IDP integration, ABAC, fine-grained{' '}
            <br className="hidden md:block" />
            access control, audit trails, and custom roles.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative md:order-1">
          <img
            className="w-[700px]"
            src="images/homepage/intro/elastic-rego.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:translate-y-1/3 mb-8 mx-4">
          <p>
            Deploy the authorizer as a sidecar or{' '}
            <br className="hidden md:block" />
            microservice in your cloud, providing{' '}
            <br className="hidden md:block" />
            millisecond latency and 100% availability.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative">
          <img
            className="w-[700px]"
            src="images/homepage/intro/kubernetes-pod.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:order-2 md:translate-y-1/3 mb-8 mx-4">
          <p>
            Integrate with your identity provider,{' '}
            <br className="hidden md:block" />
            artifact registry, logging system, tech stack.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative md:order-1">
          <img
            className="w-[700px]"
            src="images/homepage/intro/aserto-control-plane.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute right-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:translate-y-1/3 mb-8 mx-4">
          <p>
            Open source authorizer based on LF/CNCF{' '}
            <br className="hidden md:block" />
            Projects such as OPA, OCI, and Sigstore.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative">
          <img
            className="w-[700px]"
            src="images/homepage/intro/authorizer.png"
          />
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row justify-evenly mb-40 md:mb-72 text-[20px] font-semibold">
        <div className="-z-10 hidden md:block absolute left-0 -top-1/4 w-[500px] h-[500px] bg-homepageGlow"></div>
        <div className="text-center md:text-left md:order-2 md:translate-y-1/3 mb-8 mx-4">
          <p>
            Leverage familiar container workflows,{' '}
            <br className="hidden md:block" />
            policy-as-code, and GitOps best practices.
          </p>
          <Link
            className="text-aserto-lochivar-accent-40 hover:underline"
            href="/benefits"
          >
            {`Learn more >`}
          </Link>
        </div>
        <div className="relative md:order-1">
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
