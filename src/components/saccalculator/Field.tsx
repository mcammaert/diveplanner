import * as React from 'react'
import { partial } from '../../lib/utils'
import TextField from 'material-ui/TextField'

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
      <div className="field">
        <TextField
          floatingLabelText={this.props.label}
          onChange={updateHandler}
          value={this.props.value}
          fullWidth={true}
        />
      </div>
    )
  }
}
