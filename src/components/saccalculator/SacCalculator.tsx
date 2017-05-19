import * as React from 'react'
import { UUID as uuid } from 'angular2-uuid'
import { IStop, ISafetyStop, _addStop, _updateStop, _removeStop } from '../../lib/sacCalculatorHelper'
import { Stop } from './Stop'

export interface ICalculatorState {
  stops: Array<IStop>
  safetyStop: ISafetyStop
}

export class SacCalculator extends React.Component<{}, ICalculatorState> {
  state = {
    stops: [
      {uuid: uuid.UUID(), depthInMeters: 8, timeInSeconds: 22 * 60},
    ],
    safetyStop: {
      uuid: uuid.UUID(),
      enabled: true,
      depthInMeters: 3,
      timeInSeconds: 3 * 60,
    }
  }

  constructor() {
    super()
  }

  _handleAddStop = (event: React.MouseEvent<HTMLElement>) : void => {
    event.preventDefault()
    const newStop = {uuid: uuid.UUID(), depthInMeters: 0, timeInSeconds: 0}
    const updatedStops = _addStop(this.state.stops, newStop)
    this.setState({
      stops: updatedStops
    })
  }

  _handleUpdateStop = (stop: IStop, event: React.MouseEvent<HTMLElement>) : void => {
    const updatedStops = _updateStop(this.state.stops, stop)
    this.setState({
      stops: updatedStops
    })
  }

  _handleRemoveStop = (uuid: string, event: React.MouseEvent<HTMLElement>) : void => {
    event.preventDefault()
    const updatedStops = _removeStop(this.state.stops, uuid)
    this.setState({
      stops: updatedStops
    })
  }

  render() {
    const addStopHandler = this._handleAddStop
    return (
      <div>
        {this.state.stops.map((stop: IStop) => (
          <Stop
            key={stop.uuid}
            {...stop}
            _handleRemoveStop={this._handleRemoveStop}
            _handleUpdateStop={this._handleUpdateStop}
          />
        )
        )}
        <a href="#" onClick={addStopHandler}>Add stop</a>
      </div>
    )
  }
}
