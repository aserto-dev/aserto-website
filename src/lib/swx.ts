import clsx, { ClassValue } from 'clsx'
import { keys } from './util'

/**
 * Like a switch, but for matching keys in an object to create classNames
 */
export function swx<Str extends string>(
  value: Str | undefined,
  cxArg: { [key in Str]?: ClassValue } & { default?: ClassValue }
) {
  if (!value) return clsx(cxArg['default'])
  let matchedArg: ClassValue | undefined
  keys(cxArg).forEach((key) => {
    if (key === value) {
      // Matches
      matchedArg = cxArg[key]
    }
  })
  if (matchedArg) return clsx(matchedArg)
  return clsx(cxArg['default'])
}
