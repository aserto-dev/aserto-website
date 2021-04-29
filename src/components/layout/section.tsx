import clsx from 'clsx'
import Container from './container'

type Props = {
  header?: {
    tag: string
    title: string
    subtitle: string
  }
  children?: React.ReactNode
  muted?: boolean
}

const SectionLayout = ({ header, children, muted }: Props) => {
  return (
    <section className={clsx({ 'bg-ds-pewter bg-opacity-5': muted })}>
      <Container className="py-24 space-y-16">
        {header && (
          <div className="text-center">
            <p className="mb-2 text-xl tracking-widest uppercase text-ds-endgame">
              {header.tag}
            </p>
            <h2 className="mb-8 text-5xl">{header.title}</h2>
            <p className="max-w-screen-md mx-auto text-3xl font-book text-ds-pewter">
              {header.subtitle}
            </p>
          </div>
        )}
        <div>{children}</div>
      </Container>
    </section>
  )
}

export default SectionLayout
