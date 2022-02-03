import { TableRow, Maybe } from 'lib/sanity/generated'
import Image from 'components/primitives/image'
import s from './feature-category.module.scss'
import clsx from 'clsx'

type Props = {
  row: Maybe<TableRow>
}

const Rows = ({ row }: Props) => {
  // construct a copy of the array with the first member becoming
  const cells = (row && row.cells && [...row.cells]) || []
  const rowname = cells?.shift()
  return (
    <div className="flex">
      <div className={clsx('flex w-4/12 items-left', s.rowname)}>
        <div className="font-bold my-auto">{rowname}</div>
      </div>
      <div className="flex w-8/12">
        <div className="w-full grid grid-cols-4">
          {cells &&
            cells.map((c, i) => {
              const checkmark = c === 'true'
              const value = c === 'false' ? '' : c
              return (
                <div key={i} className={clsx('flex', s.cell)}>
                  <div className="my-auto">
                    {checkmark ? (
                      <div className={s.checkmark}>
                        <Image
                          src="/images/pricing/checkmark.svg"
                          loading="eager"
                          width={18}
                          height={13}
                        />
                      </div>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Rows
