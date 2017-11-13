import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseAuth } from './auth/fire'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = { authed: false }
  }
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true
        })
      } else {
        this.setState({
          authed: false
        })
      }
    })
  }
  render () {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={<Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Oro-GoT</Link>}
          iconElementRight={
            this.state.authed
              ? <FlatButton label='Logout' style={{color: 'white'}} onClick={() => { firebaseAuth().signOut() }} />
              : <div>
                <Link to='/register'>
                  <FlatButton label='Register' style={{color: 'white'}} />
                </Link>
                <Link to='/login'>
                  <FlatButton label='Login' style={{color: 'white'}} />
                </Link>
              </div>
            }
        />
      </div>
    )
  }
}
export default Nav
