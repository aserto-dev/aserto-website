// Primitives
import CustomHead from 'components/primitives/custom-head'

// Layout
import PageLayout from 'components/layout/page'
import Link from 'components/primitives/link'

const questionsAuthentication = [
  {
    question: 'What is authorization?',
    answer:
      'Authorization is the process of determining whether a user is allowed to perform an operation on a resource. Every application that has more than one user needs authorization. Which basically means - every application :)'
  },
  {
    question: 'If I already do authentication, why do I need authorization?',
    answer: (
      <>
        Authentication is the process of having a user prove their identity to
        an application or system using a password, a magic link, a code received
        over SMS, etc. Once a user has authenticated, the application needs to
        determine what they are allowed to do. Unless every user has identical
        permissions to every other user in your application, you need an
        authorization system. We dive into the difference in{' '}
        <a href="/">Authentication != Authorization.</a>
      </>
    )
  },
  {
    question:
      'But OAuth2-based authentication already has scopes. Why shouldn’t I use scopes embedded in my JSON Web Token (JWT) for authorization?',
    answer: (
      <>
        While this approach is easy to get started with, there are a few reasons
        why this is considered a security anti-pattern. For more details, read{' '}
        <a href="/">OAuth2 Scopes are NOT Permissions.</a>
      </>
    )
  },
  {
    question: 'How does Aserto relate to Auth0?',
    answer:
      'Auth0 provides authentication as a service. Aserto starts where Auth0 leaves off - once a user is authenticated with Auth0, you can use Aserto to determine what the user is authorized to do. Aserto treats Auth0 as an identity provider, and works extremely well with Auth0. If you already use Auth0 for authentication, you’ll find that Aserto’s SDK’s (React, node.js, etc) look really familiar.'
  },
  {
    question: 'Does Aserto work with other identity providers besides Auth0?',
    answer: 'Absolutely. Let us know what identity provider(s) you’re using!'
  }
]

const questionsStyles = [
  {
    question: 'What is RBAC?',
    answer:
      'RBAC stands for role-based access control, and is a common style of authorization. With RBAC, users are mapped to roles (such as “viewer”, “owner”, and “admin”), and roles are assigned permissions (for example, a viewer can “read a document” but not “create a document”). For many applications, this style of authorization is sufficient. Aserto makes it easy to build RBAC systems and evolve them as necessary.'
  },
  {
    question: 'What is ABAC?',
    answer:
      'ABAC stands for attribute-based access control, and provides more flexibility over the mapping between users and permissions. ABAC rules are typically written over a set of generic attributes that are typically sourced from one or more systems - identity providers, directories, or even HR systems. As applications move up-market and sell into enterprises, the requirements around this kind of mapping become more sophisticated, and often cross over into ABAC. Aserto makes it easy to evolve RBAC systems into ABAC.'
  }
]

const questionsPolicy = [
  {
    question: 'What is policy-as-code?',
    answer: (
      <>
        Policy-as-code is the practice of treating your authorization policy as
        a first-class citizen: lifting it out of the application and into a
        domain-specific language (in our case, Rego), and storing and versioning
        it using the same tools as you use for your application code. We
        describe why this is a valuable practice in{' '}
        <Link href="/">Why separate policy from your code?</Link>
      </>
    )
  },
  {
    question: 'What is the Open Policy Agent or OPA?',
    answer:
      'OPA is an open source policy engine hosted by the Cloud-Native Computing Foundation (CNCF). OPA is considered a stable project, having graduated from the CNCF in February 2021. OPA is quickly growing as a multi-vendor open source ecosystem, and is widely used for managing policy to infrastructure (kubernetes), data, and application authorization.'
  },
  {
    question: 'What is Rego?',
    answer:
      'Rego is the policy language for the OPA policy engine. Rego is a declarative language and allows the author to express a set of rules. The OPA engine can be used to evaluate these rules in the context of input data (for example, user attributes and resource data) to make authorization decisions.'
  }
]

const questionsAserto = [
  {
    question: 'What does Aserto mean?',
    answer:
      'Aserto means “assertion” or “claim” in Esperanto. Aserto wants to create a universal language and system for expressing assertions and evaluating them for the purpose of authorizing access to applications and systems.'
  }
]

const Faq = () => {
  return (
    <PageLayout
      contain
      headProps={{
        title: 'Aserto Faq',
        description: 'Description',
        image: 'images/og.png'
      }}
    >
      <CustomHead />
      <section className="py-20">
        <h1 className="text-5xl leading-none tracking-tight text-aserto-grey-90 md:text-6xl xl:text-7.5xl">
          FAQ
        </h1>
        <h2 className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-16 md:text-4.5xl font-roboto">
          Authentication and Authorization
        </h2>
        <ul>
          {questionsAuthentication.map((question, i) => {
            return (
              <li key={`question-${i}-${question.question}`}>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-2xl font-roboto">
                  {question.question}
                </p>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-5 md:text-xl font-roboto">
                  {question.answer}
                </p>
              </li>
            )
          })}
        </ul>
        <h2 className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-20 md:text-4.5xl font-roboto">
          Styles of Authorization
        </h2>
        <ul>
          {questionsStyles.map((question, i) => {
            return (
              <li key={`question-${i}-${question.question}`}>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-2xl font-roboto">
                  {question.question}
                </p>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-5 md:text-xl font-roboto">
                  {question.answer}
                </p>
              </li>
            )
          })}
        </ul>
        <h2 className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-20 md:text-4.5xl font-roboto">
          Authorization Policy
        </h2>
        <ul>
          {questionsPolicy.map((question, i) => {
            return (
              <li key={`question-${i}-${question.question}`}>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-2xl font-roboto">
                  {question.question}
                </p>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-5 md:text-xl font-roboto">
                  {question.answer}
                </p>
              </li>
            )
          })}
        </ul>
        <h2 className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-20 md:text-4.5xl font-roboto">
          Aserto
        </h2>
        <ul>
          {questionsAserto.map((question, i) => {
            return (
              <li key={`question-${i}-${question.question}`}>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-90 sm:text-lg md:mt-10 md:text-2xl font-roboto">
                  {question.question}
                </p>
                <p className="mt-5 text-base md:leading-tight text-aserto-grey-60 sm:text-lg md:mt-5 md:text-xl font-roboto">
                  {question.answer}
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    </PageLayout>
  )
}

export default Faq
