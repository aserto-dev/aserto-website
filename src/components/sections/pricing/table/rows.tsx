import { TableRow, Maybe } from 'lib/sanity/generated'
import Row from './row'

type Props = {
  rows: Maybe<TableRow>[]
}

const TableRows = ({ rows }: Props) => {
  return (
    <div>
      {rows.map((r, i) => {
        return (
          <Row key={i} row={r} />
        )
      })}
    </div>
  )
}

export default TableRows
