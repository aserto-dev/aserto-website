import Link from 'components/primitives/link'

type CardProps = {
  title: string
  icons: string[]
  link: string
  sccIcons: Array<{ icon: string; label: string; desc: string }>
}

const Card = ({ title, icons, link, sccIcons }: CardProps) => {
  return (
    <div
      className="relative w-[560px] h-[340px] bg-aserto-grey-10 border border-aserto-grey-40 rounded-[11px]
      text-aserto-grey-90 px-[20px] pt-[20px] mb-[50px] font-roboto hover:border-aserto-lochivar-accent-30"
    >
      <p className="text-[22px] text-center">{title}</p>
      <div className="flex items-center justify-center my-[30px] gap-[30px]">
        {icons.map((icon) => (
          <img
            className="h-[80px]"
            key={icon}
            src={`/images/quickstarts/${icon}.svg`}
            alt={icon}
          />
        ))}
      </div>
      <div className="w-[300px] m-auto">
        {sccIcons.map((scc) => (
          <div className="flex my-[10px]" key={scc.icon}>
            <img
              className="h-[32px] mr-[10px]"
              src={`/images/quickstarts/${scc.icon}.svg`}
              alt={scc.label}
            />
            <p className="text-[12px] font-roboto align-middle leading-[32px]">
              <strong>{scc.label}</strong>
              {` (${scc.desc})`}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-aserto-grey-20 w-full text=[16px] absolute bottom-0 left-0 p-[10px] rounded-b-[11px]">
        <p className="text-center">
          {"Don't have an account? "}
          <Link className="text-aserto-lochivar-accent-30" href="/#signup">
            Create an account.
          </Link>{' '}
          Or,{' '}
          <Link
            className="text-aserto-lochivar-accent-30"
            href={`https://console.aserto.com/ui/quickstarts/${link}`}
          >
            launch this Quickstart
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Card
