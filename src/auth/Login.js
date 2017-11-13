import React, { Component } from 'react'
import { firebaseAuth } from './fire'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      em: '',
      pw: '',
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    firebaseAuth().signInWithEmailAndPassword(this.state.em, this.state.pw)
      .catch(e => this.setState({errorMessage: e.message})
    )
  }
  render () {
    return (
      <div className='container'>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelText='Email'
            onChange={e => this.setState({ em: e.target.value })}
            errorText={this.state.errorMessage} /><br />
          <TextField
            floatingLabelText='Password'
            onChange={e => this.setState({ pw: e.target.value })}
            errorText={this.state.errorMessage} /><br /><br />
          <RaisedButton label='Submit' type='submit'
            primary={true} className='center' />
        </form>
      </div>
    )
  }
}
