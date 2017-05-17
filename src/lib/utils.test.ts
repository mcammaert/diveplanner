import {barToMeter, meterToBar} from './utils'

test('convert 1 bar to meter', () => {
  const result = barToMeter(1) //expect 0
  expect(result).toBe(0)
})

test('convert 4 bar to meter', () => {
  const result = barToMeter(4) //expect 3
  expect(result).toBe(30)
})

test('convert 2.8 bar to meter', () => {
  const result = barToMeter(2.8) //expect 18
  expect(result).toBe(18)
})

test('convert 0 meter to bar', () => {
  const result = meterToBar(0) //expect 0
  expect(result).toBe(1)
})

test('convert 10 meter to bar', () => {
  const result = meterToBar(10) //expect 2
  expect(result).toBe(2)
})

test('convert 28 meter to bar', () => {
  const result = meterToBar(28) //expect 3.8
  expect(result).toBe(3.8)
})

test('convert 28 meter to bar to meter', () => {
  const result = barToMeter(meterToBar(28)) //expect 28
  expect(result).toBe(28)
})
