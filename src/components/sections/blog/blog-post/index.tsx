import Link from 'components/primitives/link'
import Image from 'next/image'

type Writter = {
  name: string
  position: string
  company: string
  image: string
}

type Props = {
  author: Writter
  category: string
  date: string
  description: string
  image: string
  title: string
}

const Post = ({ author, category, date, description, image, title }: Props) => {
  return (
    <section className="relative mx-auto pt-28 mb-52">
      <div className="w-10/12 mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-12 text-aserto-grey-60 font-roboto"
        >
          Back to listing
        </Link>
        <h1 className="text-5xl leading-none tracking-tighter text-white xl:text-6.5xl">
          {title}
        </h1>
        <div className="flex items-start justify-between mt-32 mb-16 pb-14">
          <div className="relative flex items-center w-4/12">
            <Image
              width="80"
              height="80"
              src={author.image}
              alt={author.name}
            />
            <div className="ml-6">
              <p className="text-aserto-grey-60 font-roboto">{author.name}</p>
              <p className="uppercase text-aserto-lochivar-100 font-roboto">
                {author.position}, {author.company}
              </p>
            </div>
            <p className="absolute left-0 w-full uppercase -bottom-14 text-aserto-grey-60 font-roboto">
              {category}
            </p>
          </div>
          <p className="uppercase text-aserto-lochivar-100 font-roboto">
            {date}
          </p>
        </div>
      </div>
      <div>
        <Image width="1216" height="600" src={image} alt={title} />
      </div>
      <div className="w-8/12 mx-auto mt-20 space-y-12">
        {description}
        <div>
          <p className="leading-loose text-aserto-grey-60 font-roboto">
            We’ve talked to countless developers about how they’ve built and
            evolved their authorization systems over time. One common regret
            that keeps coming up involves getting burned by using OAuth2 scopes
            in a JWT as the sole basis for making authorization decisions.
            <br />
            <br />
            OAuth2 scopes were never intended to be an authorization mechanism,
            and indeed are a really bad idea when used as a substitute for a
            real authorization architecture. So how has this anti-pattern
            emerged?
          </p>
        </div>
        <div>
          <h3 className="text-3xl tracking-tighter text-aserto-grey-90">
            Starting with authentication
          </h3>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            When developers build a new application, one of the first things
            they need to implement is a login system. Thanks to standards like
            OAuth2 and OpenID Connect (OIDC), and services like Auth0, they can
            just delegate the process of authentication to an external Identity
            Provider such as Google, Facebook, or GitHub. Then comes
            authorization - determining what a user can actually do.
          </p>
        </div>
        <div>
          <h3 className="text-3xl tracking-tighter text-aserto-grey-90">
            The temptation of OAuth2 scopes
          </h3>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            The very first authorization pattern developers implement involves
            differentiating “normal users” and “admins”. It’s very easy to
            create an OAuth2 scope to represent the “admin” permission. When a
            user that is determined to be an admin logs in, developers rely on
            the authentication system to place this admin scope into the JSON
            Web Token (JWT) that is minted for that user. Every call to a
            protected resource checks the JWT for this “admin” scope, and life
            is good.
          </p>
        </div>
        <div>
          <h3 className="text-3xl tracking-tighter text-aserto-grey-90">
            The real world
          </h3>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            Except, life is rarely that simple. Any serious application quickly
            runs into four problems.
          </p>
        </div>
        <div>
          <h5 className="text-lg tracking-tighter text-aserto-grey-90">
            Scope explosion
          </h5>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            Applications grow to have many types of resources, and each of these
            resources (documents, reports, projects, repositories) support a few
            different operations (create, read, update, delete, list). A
            fine-grained permission system often creates a cartesian product of
            these resource/operation tuples, resulting in dozens (or hundreds)
            of scopes. Injecting all of these scopes into a JWT isn’t possible,
            since the HTTP authorization header will exceed size limits.
          </p>
        </div>
        <div>
          <h5 className="text-lg tracking-tighter text-aserto-grey-90">
            Stale permissions
          </h5>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            Since the JWT is minted at login time and its lifetime is typically
            1-24 hours, an application that relies on scopes encoded in the JWT
            instead of real-time permission checks runs the very serious risk of
            making authorization decisions based on an outdated snapshot of the
            user’s security attributes. Tying authorization to the lifetime of a
            token isn’t exactly “secure by design” – when an administrator
            changes the attributes or roles for a user, they expect these
            changes to affect that user’s permissions in near real-time. Having
            to wait for a token to expire before the new permissions are in
            effect is a security anti-pattern, and is dangerous in the case of a
            known breach. And creating a revocation system for JWTs is
            difficult, and beyond the scope of most systems that mint them.
          </p>
        </div>
        <div>
          <h5 className="text-lg tracking-tighter text-aserto-grey-90">
            No resource context
          </h5>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            OAuth2 scopes can designate a general permission like read:document,
            but often applications have to make authorization decisions in the
            context of a specific resource (Alice has the read:document
            permission for the “company strategy” document, but not for the
            “Bob’s performance review” document). Any real-world scenario (for
            example, implementing access control lists on specific resources)
            requires a real authorization system.
          </p>
        </div>
        <div>
          <h5 className="text-lg tracking-tighter text-aserto-grey-90">
            Short-lived tokens lead to performance issues
          </h5>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            The only practical solution to avoiding the security pitfalls of
            long-lived JWTs is to rely on very short token lifetimes. But the
            reason for using JWTs for authorization to begin with is that they
            don’t require checking back with a server. If JWTs have to be
            renewed every minute, they are the worst of both worlds: they always
            represent stale state (even if it’s just by a minute), and the
            constant need to reissue them puts a much higher operational load on
            the login system, leading to performance issues, since
            authentications using the OAuth2 protocol are expensive. It simply
            doesn’t make sense to use an authentication system for authorization
            purposes, since authorization calls happen 100x more times during a
            user session than authentication.
          </p>
        </div>
        <div>
          <h3 className="text-3xl tracking-tighter text-aserto-grey-90">
            The right way to build authorization
          </h3>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            Authorization should always be done in real-time - just before your
            code wants to access a sensitive resource. The authorization
            component or service should use the current attributes of the user,
            as well as the specific resource context, as inputs into the
            decision engine as it evaluates the authorization policy for the
            operation to be performed. And that decision engine should be
            deployed in the same subnet as your application (ideally as a
            sidecar container in the same pod), so that it can operate at 100%
            availability and at millisecond-scale latency.
          </p>
        </div>
        <div>
          <h3 className="text-3xl tracking-tighter text-aserto-grey-90">
            Others agree...
          </h3>
          <p className="mt-8 leading-loose text-aserto-grey-60 font-roboto">
            Of course, we’re not the first to make this observation. As Vittorio
            Bertocci, Principal Architect at Auth0, eloquently describes in his
            blog post, OAuth2 scopes were never intended to be an authorization
            mechanism: they were invented so that an Identity Provider could
            allow users to delegate a subset of their permissions and data to
            applications.
            <br />
            <br />
            We agree with Vittorio. Using OAuth2 scopes as a substitute for a
            real authorization system is Considered Harmful. A better approach
            is to think about authorization as a distinct operation that is
            downstream from authentication, but is equally critical to design
            and implement correctly.
            <br />
            <br />
            Embracing a standard authorization system is a great way to get
            there quickly.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Post
