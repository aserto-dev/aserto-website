import { BlockContent } from 'components/primitives/block-content'
import Link from 'components/primitives/link'
import Container from 'components/sections/homepage/container'
import { ImageFragment, UseCaseFragment } from 'lib/sanity/generated'

const UseCaseLinks = ({
  image,
  links
}: {
  image: ImageFragment
  links: UseCaseFragment[]
}) => {
  return (
    <Container className="bg-aserto-grey-10 py-32 px-8">
      <div className="flex flex-wrap justify-center items-center text-center gap-32">
        <img
          className="inline-flex align-top self-center"
          src={image?.asset?.url ?? '/404'}
          alt={image?.alt ?? 'Useful Lottie'}
        />
        <div className="inline-flex flex-col align-top text-left gap-8">
          <BlockContent
            className="text-aserto-grey-90 text-[24px] lg:text-[30px] leading-8 lg:leading-10"
            blocks={image.captionRaw}
          />
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <li
                key={i}
                className="text-aserto-lochivar-accent-40 font-semibold text-[20px]"
              >
                <Link href={`/use-cases/${link.slug?.current}`}>
                  {link.shortHeaderTitle}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UseCaseLinks
