import * as React from 'react'
import './App.css'
import { SacCalculator } from './components/saccalculator'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {blue600} from 'material-ui/styles/colors'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue600,
  },
  appBar: {
    height: 50,
  },
})

class App extends React.Component<{}, null> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <SacCalculator />
      </MuiThemeProvider>
    )
  }
}

export default App
