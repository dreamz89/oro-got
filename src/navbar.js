import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class Nav extends Component {
  render () {
    return (
      <div>
        <AppBar
          title="Oro-GoT"
          iconElementRight={this.state.logged ? <Home /> : <Login />}
        />
      </div>
    )
  }
}
export default Nav
