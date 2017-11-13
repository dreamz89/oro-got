import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { firebaseAuth } from './fire'

var randPassword = Array(8).fill('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('')

export default class Register extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      errorMessage: '',
      password: 'provided upon registration'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({password: randPassword})
    firebaseAuth().createUserWithEmailAndPassword(this.state.email, randPassword)
      .catch(e => this.setState({errorMessage: e.message})
    )
  }
  render () {
    return (
      <div>
        <div className='container'>
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText='Email'
              onChange={e => this.setState({ email: e.target.value })}
              errorText={this.state.errorMessage} /><br />
            <RaisedButton
              label='Submit'
              type='submit'
              primary={true}
              className='center' /><br />
          </form>
          <p>Your password is {this.state.password}</p>
        </div>
      </div>
    )
  }
}
