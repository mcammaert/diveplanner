import * as React from 'react'
import { UUID as uuid } from 'angular2-uuid'
import { IStop, ISafetyStop, _addStop, _updateStop, _removeStop } from '../../lib/sacCalculatorHelper'
import { Stop } from './Stop'
import FlatButton from 'material-ui/FlatButton'
import './SacCalculator.css'

export interface ICalculatorState {
  stops: Array<IStop>
  safetyStop: ISafetyStop
}

export class SacCalculator extends React.Component<{}, ICalculatorState> {
  state = {
    stops: [
      {uuid: uuid.UUID(), depthInMeters: 25, timeInSeconds: 32 * 60},
      {uuid: uuid.UUID(), depthInMeters: 6, timeInSeconds: 3 * 60},
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

  _handleUpdateStop = (stop: IStop) : void => {
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
        <div className="stops">
          {this.state.stops.map((stop: IStop) => (
            <Stop
              key={stop.uuid}
              {...stop}
              previousDepthInMeters={0}
              _handleRemoveStop={this._handleRemoveStop}
              _handleUpdateStop={this._handleUpdateStop}
            />
          )
          )}
          <div className="stop totals">
            <div className="field">&nbsp;</div>
            <div className="field">&nbsp;</div>
            <div className="field label"><strong>Total</strong></div>
            <div className="field">&nbsp;</div>
            <div className="field">&nbsp;</div>
          </div>
        </div>
        <div className="footer">
          <FlatButton href="#" onClick={addStopHandler} label="Add stop" primary={true} />
        </div>
      </div>
    )
  }
}
