import { UUID as uuid } from 'angular2-uuid'
import { IStop, _addStop, _updateStop, _removeStop } from './sacCalculatorHelper'

const UUID1 = uuid.UUID()
const UUID2 = uuid.UUID()
const UUID3 = uuid.UUID()

test('_addStop should add the passed stop to the list', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
  ]
  const newStop: IStop = {uuid: UUID2, depthInMeters: 3, timeInSeconds: 3 * 60}
  const expected: Array<IStop> =  [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID2, depthInMeters: 3, timeInSeconds: 3 * 60},
  ]

  const result = _addStop(startStops, newStop)

  expect(result).toEqual(expected)
})

test('_addStop should not mutate the existing todo array', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
  ]
  const newStop: IStop = {uuid: UUID2, depthInMeters: 3, timeInSeconds: 3 * 60}

  const result = _addStop(startStops, newStop)

  expect(result).not.toBe(startStops)
})

test('_updateStop should update a stop by id', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID2, depthInMeters: 20, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]
  const updatedStop: IStop = {uuid: UUID2, depthInMeters: 25, timeInSeconds: 10 * 60}
  const expectedStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID2, depthInMeters: 25, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]

  const result = _updateStop(startStops, updatedStop)

  expect(result).toEqual(expectedStops)
})

test('_updateStop should not mutate the original array', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID2, depthInMeters: 20, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]
  const updatedStop: IStop = {uuid: UUID2, depthInMeters: 25, timeInSeconds: 10 * 60}

  const result = _updateStop(startStops, updatedStop)

  expect(result).not.toBe(startStops)
})

test('_removeStop should remove an item by id', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID2, depthInMeters: 20, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]
  const targetId = UUID2
  const expectedStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]
  const result = _removeStop(startStops, targetId)

  expect(result).toEqual(expectedStops)
})

test('_removeStops should not mutate the original array', () => {
  const startStops: Array<IStop> = [
    {uuid: UUID1, depthInMeters: 10, timeInSeconds: 10 * 60},
    {uuid: UUID3, depthInMeters: 30, timeInSeconds: 10 * 60},
  ]
  const targetId = UUID2
  const result = _removeStop(startStops, targetId)

  expect(result).not.toBe(startStops)
})
