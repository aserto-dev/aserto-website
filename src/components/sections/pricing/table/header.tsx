import { Edition } from 'lib/sanity/generated'

type Props = {
  editions: Edition[]
}

const TableHeader = ({ editions }: Props) => {
  return (
    <div className="grid grid-cols-4 mx-auto mt-20">
      {editions.map((e, i) => {
        return (
          <h2 className="text-left text-xl text-white" key={i}>
            {e.title}
          </h2>
        )
      })}
    </div>
  )
}

export default TableHeader
