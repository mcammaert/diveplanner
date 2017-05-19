import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Field } from './Field'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Field
      type="depth"
      label="meters"
      value={0}
      _handleUpdateField={() => false}
    />,
    div
  )
})
