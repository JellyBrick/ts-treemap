import { Comparable } from './Types'

export const isIterable = <K, V>(value: unknown): value is Iterable<readonly [K, V]> => {
  if (value == null) {
    return false
  }
  const itr = value as Iterable<readonly [K, V]>
  return itr[Symbol.iterator] != null
}

export const isComparable = (object: unknown): object is Comparable<unknown> => {
  const toString = Object.prototype.toString
  const cast = object as Record<string, (a: number, b: number) => number | undefined>
  return cast.compare != null && toString.call(cast.compare).endsWith('Function]')
}

export const isDate = (value: unknown): value is Date => {
  const toString = Object.prototype.toString
  return toString.call(value).endsWith('Date]')
}
