import * as React from 'react'
import { partial } from '../../lib/utils'

interface IField {
  type: 'depth'|'time'
  label: string
  value: number
  _handleUpdateField: Function
}

export class Field extends React.Component<IField, null> {
  render() {
    const updateHandler = partial(this.props._handleUpdateField, this.props.type)
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="number" onChange={updateHandler} value={this.props.value}/>
      </div>
    )
  }
}
