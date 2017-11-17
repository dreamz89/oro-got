import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseAuth } from '../auth/fire'
import logo from '../images/GoTlogo.svg'
import RaisedButton from 'material-ui/RaisedButton'

export default class AboveTheFold extends Component {
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
      <div className='atf'>
        <div id='cover' />
        <div className='container'>
          <div className='cta'>
            <img src={logo} alt='GoT logo' />
            <h2>In season 5 alone, GoT was shot in 5 countries, on 151 sets, for 240 days, 166 cast members, 1000 crew members, and over 5000 extras. Join us.</h2>
            { this.state.authed
              ? <Link to='/profile'><RaisedButton label='Be an extra!' primary={true} className='center' /></Link>
              : <RaisedButton label='Be an extra!' primary={true} className='center' /> }
          </div>
        </div>
      </div>
    )
  }
}
