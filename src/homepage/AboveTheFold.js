import React, { Component } from 'react'
import Cover from '../images/Cover3.jpg'
import logo from '../images/GoTlogo.svg'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12
}

export default class AboveTheFold extends Component {
  render () {
    return (
      <div>
        <img src={logo} alt='GoT logo' />
        <h2>In season 5 alone, GoT was shot in 5 countries, on 151 sets, for 240 days, 166 cast members, 1000 crew members, and over 5000 extras. Join us.</h2>
        <RaisedButton label="Be an extra!" style={style} />
      </div>
    )
  }
}
