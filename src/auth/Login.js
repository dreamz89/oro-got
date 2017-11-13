import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component {
  render () {
    return (
      <div>
        <TextField floatingLabelText='Username' /><br />
        <TextField floatingLabelText='Password' /><br/><br/>
        <RaisedButton label='Submit' primary={true} className='center' />
      </div>
    )
  }
}
