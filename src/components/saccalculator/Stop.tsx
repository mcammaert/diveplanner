import * as React from 'react'
import { partial, meterToBar, isNumeric } from '../../lib/utils'
import { IStop } from '../../lib/sacCalculatorHelper'
import { Field } from './Field'

interface IStopClass extends IStop {
  _handleRemoveStop: Function
  _handleUpdateStop: Function
}

export class Stop extends React.Component<IStopClass, null> {
  render() {
    const removeHandler = partial(this.props._handleRemoveStop, this.props.uuid)
    const updateFieldHandler = (type: 'depth'|'time', event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement
      let value = parseFloat(target.value)
      if (!isNumeric(value)) {
        value = 0
      }
      const updatedStop = {
        uuid: this.props.uuid,
        depthInMeters: type === 'depth' ? value : this.props.depthInMeters,
        timeInSeconds: type === 'time' ? value * 60 : this.props.timeInSeconds,
      }
      this.props._handleUpdateStop(updatedStop)
    }
    const pressure = meterToBar(this.props.depthInMeters)
    const consumption = pressure * this.props.timeInSeconds / 60
    return (
      <div>
        <Field
          type="depth"
          label="meters"
          value={this.props.depthInMeters}
          _handleUpdateField={updateFieldHandler}
        />
        <Field
          type="time"
          label="minutes"
          value={this.props.timeInSeconds / 60}
          _handleUpdateField={updateFieldHandler}
        />
        Bar: {pressure.toFixed(2)}<br />
        SAC: {consumption.toFixed(2)}<br />
        <a className="btn btn-delete" href="" onClick={removeHandler}>delete</a>
      </div>
    )
  }
}
