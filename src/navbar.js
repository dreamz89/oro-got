import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class Nav extends Component {
  render () {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={<Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Oro-GoT</Link>}
          iconElementRight={
            <div>
              <Link to='/register'>
                <FlatButton label='Register' style={{color: 'white'}} />
              </Link>
              <Link to='/login'>
                <FlatButton label='Login' style={{color: 'white'}} />
              </Link>
            </div>}
        />
      </div>
    )
  }
}
export default Nav
