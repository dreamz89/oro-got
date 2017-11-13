import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Register extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <h2>Register</h2>
          <TextField hintText='At least 5 characters'
            floatingLabelText='Username' /><br />
          <RaisedButton label='Submit' primary={true} className='center' />
          <p>Your password will be generated by our server</p>
        </div>
      </div>
    )
  }
}
