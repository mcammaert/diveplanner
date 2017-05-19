import { barToMeter, meterToBar, partial, pipe, isNumeric } from './utils'

test('Should convert 1 bar to meter', () => {
  const result = barToMeter(1) // expect 0
  expect(result).toBe(0)
})

test('Should convert 4 bar to meter', () => {
  const result = barToMeter(4) // expect 3
  expect(result).toBe(30)
})

test('Should convert 2.8 bar to meter', () => {
  const result = barToMeter(2.8) // expect 18
  expect(result).toBe(18)
})

test('Should convert 3.25 bar to meter', () => {
  const result = barToMeter(3.25) // expect 22.5
  expect(result).toBe(22.5)
})

test('Should convert 0 meter to bar', () => {
  const result = meterToBar(0) // expect 0
  expect(result).toBe(1)
})

test('Should convert 10 meter to bar', () => {
  const result = meterToBar(10) // expect 2
  expect(result).toBe(2)
})

test('Should convert 28 meter to bar', () => {
  const result = meterToBar(28) // expect 3.8
  expect(result).toBe(3.8)
})

test('Should convert 28 meter to bar and back again to meter', () => {
  const result = barToMeter(meterToBar(28)) // expect 28
  expect(result).toBe(28)
})

test('Should mark 2 as a valid number', () => {
  const result = isNumeric(2) // expect true
  expect(result).toBe(true)
})

test('Should mark 2.02 as a valid number', () => {
  const result = isNumeric(2.02) // expect true
  expect(result).toBe(true)
})

test('Should mark "2" as a valid number', () => {
  const result = isNumeric('2') // expect true
  expect(result).toBe(true)
})

test('Should mark "2.002" as a valid number', () => {
  const result = isNumeric('2.002') // expect true
  expect(result).toBe(true)
})

test('Should mark "A" as an invalid number', () => {
  const result = isNumeric('A') // expect false
  expect(result).toBe(false)
})

test('Should mark "2A" as an invalid number', () => {
  const result = isNumeric('2A') // expect false
  expect(result).toBe(false)
})

test('Should mark "A2" as an invalid number', () => {
  const result = isNumeric('A2') // expect false
  expect(result).toBe(false)
})

const add = (a: number, b: number) => a + b
const addThree = (a: number, b: number, c: number) => a + b + c
const inc = (num: number) => num + 1
const dbl = (num: number) => num * 2

test('partial applies the first argument ahead of time', () => {
  const inced = partial(add, 1)
  const result = inced(2) // expect 3
  expect(result).toBe(3)
})

test('partial applies the multiple arguments ahead of time', () => {
  const inced = partial(addThree, 1, 3)
  const result = inced(2) // expect 6
  expect(result).toBe(6)
})

test('pipe passes the results of inc to dbl', () => {
  const pipeline = pipe(inc, dbl) // => dbl(inc(2)) OR g(f(...args))
  const result = pipeline(2)
  expect(result).toBe(6)
})

test('pipe passes the results of dbl to inc', () => {
  const pipeline = pipe(dbl, inc) // => inc(dbl(2))
  const result = pipeline(2)
  expect(result).toBe(5)
})

test('pipe works with more than 2 functions', () => {
  const pipeline = pipe(add, inc, dbl, inc) // => inc(dbl(inc(add(1,2))))
  const result = pipeline(1, 2)
  expect(result).toBe(9)
})
