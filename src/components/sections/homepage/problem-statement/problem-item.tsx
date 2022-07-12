import { BlockContent } from 'components/primitives/block-content'

type Props = {
  title: string
  subtitleRaw: string
}

const ProblemItem = ({ title, subtitleRaw }: Props) => {
  return (
    <div className="p-[18px] bg-aserto-grey-20 rounded-[6px]">
      <h4 className="font-bold pb-[10px] text-[22px]">{title}</h4>
      <BlockContent
        blocks={subtitleRaw}
        className="text-[18px] leading-[28px] self-end"
      />
    </div>
  )
}

export default ProblemItem
