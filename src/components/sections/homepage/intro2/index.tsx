import Container from '../container'
import CodeBrowser from './code-browser.tsx'

const Intro = () => {
  return (
    <Container className="text-aserto-grey-90">
      <h1 className="text-[30px] leading-[38px] font-semibold text-center mt-16 mb-24">
        Cloud Native Authorization-as-a-service, <br /> built to evolve with
        your customer requirements.
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Zero-to-RBAC in under a day <br />
            for any language or framework.
          </p>
        </div>
        <div>
          {/* <div className="w-[400px] h-[400px] bg-homepageGlow"></div> */}
          <CodeBrowser />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:order-2 md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Scale up to enterprise requirements with <br />
            deep IDP integration, ABAC, fine-grained <br />
            access control, audit trails, and custom roles.
          </p>
        </div>
        <div className="md:order-1">
          <img className="w-[700px]" src="images/homepage/elastic-rego.png" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Deploy the authorizer as a sidecar or <br />
            microservice in your cloud, providing <br />
            millisecond latency and 100% availability.
          </p>
        </div>
        <div>
          <img className="w-[700px]" src="images/homepage/kubernetes-pod.png" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:order-2 md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Integrate with your identity provider, <br />
            artifact registry, logging system, tech stack.
          </p>
        </div>
        <div className="md:order-1">
          <img
            className="w-[700px]"
            src="images/homepage/aserto-control-plane.png"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Open source authorizer based on LF/CNCF <br />
            Projects such as OPA, OCI, and Sigstore.
          </p>
        </div>
        <div>
          <img className="w-[700px]" src="images/homepage/authorizer.png" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly mb-40 md:mb-72">
        <div className="md:order-2 md:translate-y-1/3 mb-8">
          <p className="text-[20px] font-semibold text-center md:text-left mx-4">
            Leverage familiar container workflows, <br />
            policy-as-code, and GitOps best practices.
          </p>
        </div>
        <div className="md:order-1">
          <img
            className="w-[700px]"
            src="images/homepage/source-code-workflows.png"
          />
        </div>
      </div>
    </Container>
  )
}

export default Intro
