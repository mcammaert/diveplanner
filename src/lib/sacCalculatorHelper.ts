export const METERS_PER_MINUTE = 10

export interface IStop {
  uuid: string
  depthInMeters: number
  timeInSeconds: number
}

export interface ISafetyStop extends IStop {
  enabled: boolean
}

/**
 * Add a given Stop to a list Stops
 * @param  {Array<IStop>} Stops the list of Stops
 * @param  {IStop}        Stop  the given Stop
 * @return {Array<IStop>}       the updated list of Stops
 */
export const _addStop = (list: Array<IStop>, item: IStop) : Array<IStop> => [...list, item]

/**
 * Update a given Stop in a list Stops
 * @param  {Array<IStop>} Stops the list of Stops
 * @param  {IStop}        updated  the given Stop
 * @return {Array<IStop>}       the updated list of Stops
 */
export const _updateStop = (list: Array<IStop>, updated: IStop) : Array<IStop> => {
  const updatedIndex = list.findIndex(item => item.uuid === updated.uuid)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ]
}

/**
 * Remove a given Stop to a list Stops
 * @param  {Array<IStop>} Stops the list of Stops
 * @param  {string}      uuid  the uuid of the Stop
 * @return {Array<IStop>}       the updated list of Stops
 */
export const _removeStop = (list: Array<IStop>, uuid: string) : Array<IStop> => {
  const removeIndex = list.findIndex(item => item.uuid === uuid)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]
}
