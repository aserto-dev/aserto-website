import { format } from 'date-fns'

const keys = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj) as (keyof T)[]

const formatPostDate = (date: string) => {
  return format(new Date(date), 'MMM do, yyyy')
}

export { keys, formatPostDate }
