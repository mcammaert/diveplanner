import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SacCalculator } from './SacCalculator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SacCalculator />, div)
})
