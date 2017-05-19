import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { UUID as uuid } from 'angular2-uuid'
import { Stop } from './Stop'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Stop
      uuid={uuid.UUID()}
      previousDepthInMeters={0}
      depthInMeters={0}
      timeInSeconds={0}
      _handleUpdateStop={() => false}
      _handleRemoveStop={() => false}
    />,
    div
  )
})
