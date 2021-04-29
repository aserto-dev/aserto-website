const keys = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj) as (keyof T)[]

export { keys }
