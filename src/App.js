import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom'
// import Nav from './navbar.js'
import Home from './homepage/Home'
import Login from './auth/Login'
import Register from './auth/Register'

class App extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider>
          <Router>
            <div>
              {/* <Nav /> */}
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
