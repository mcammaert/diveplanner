/**
 * Calculate depth in meters from pressure in bar
 * @param {number} bar pressure in bars
 * @return {number} depth in meters
 */
export const barToMeter = (bar: number) : number => (bar - 1) * 10

/**
 * Calculate pressure in bar from depth in meters
 * @param {number} meter depth in meters
 * @return {number} pressure in bars
 */
export const meterToBar = (meter: number) : number => (meter / 10) + 1

/**
 * Checks if a given number is valid
 * @param  {number|string}  n the given number
 * @return {boolean} true|false wheter the number is valid
 */
export const isNumeric = function (n: number|string): boolean {
  return !isNaN(parseFloat(n.toString())) && isFinite(n as number)
}

export const partial = (fn: Function, ...args: {}[]) => fn.bind(null, ...args)

const _pipe = (f: Function, g: Function) => (...args: {}[]) => g(f(...args))

export const pipe = (...fns: Function[]) => fns.reduce(_pipe)
