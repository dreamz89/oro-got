import React, { Component } from 'react'
import Hair from '../images/man.svg'
import Discretion from '../images/chatting.svg'
import Skills from '../images/horseriding.svg'

export default class Requirements extends Component {
  render () {
    return (
      <div>
        <h1>Key Requirements</h1>
        <img src={Hair} alt='Long hair man' />
        <img src={Discretion} alt='discretion' />
        <img src={Skills} alt='skills' />
      </div>
    )
  }
}
