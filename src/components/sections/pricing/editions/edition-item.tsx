// Primitives
import Button from 'components/primitives/button'

import { Edition } from 'lib/sanity/generated'
import s from './edition-item.module.scss'
import clsx from 'clsx'
import FeatureItem from './feature-item'

type Props = {
  data: Edition
  editionNameToHighlight: string
}

const EditionItem = ({ data, editionNameToHighlight }: Props) => {
  return (
    <div
      className={clsx(
        s.body,
        data.title === editionNameToHighlight
          ? s['edition-recommended']
          : s.edition
      )}
    >
      <div className="items-center justify-center mt-5 text-base tracking-tight text-white sm:text-2xl">
        <h2 className="text-center font-bold">{data.title}</h2>
        <div className={clsx('text-center text-sm', s.description)}>
          {data.description}
        </div>
        <div className="mt-4 sm:mt-0 whitespace-nowrap flex items-center justify-center min-h-[58px]">
          <a href={data.buttonUrl ?? ''}>
            <Button className={s.button}>{data.buttonText}</Button>
          </a>
        </div>
        <div className="flex items-center justify-center mt-10 text-base tracking-tight text-aserto-grey-80 font-roboto">
          <div className="text-[38px]">{data.price}</div>
          <div className="text-sm ml-2">{data.timeUnit}</div>
        </div>
        <div className="mt-10 mb-12">
          {data.features?.map((f, i) => {
            return <FeatureItem key={i} data={f ?? '&'} bullet={i > 0} />
          })}
        </div>
      </div>
    </div>
  )
}

export default EditionItem
