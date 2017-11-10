import React, { Component } from 'react'
import Hair from '../images/man.svg'
import Discretion from '../images/chatting.svg'
import Skills from '../images/horseriding.svg'

export default class Requirements extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Requirements</h1>
        <div className='req'>
          <img src={Hair} alt='Long hair man' />
          <h2>Long Hair</h2>
          <p>For men, the longer hair the better, for a medieval look.</p>
        </div>
        <div className='req'>
          <img src={Discretion} alt='discretion' />
          <h2>Discretion</h2>
          <p>Do not approach actors, unless they approach you first. Do not write on social media or tell friends and family about the filming.</p>
        </div>
        <div className='req'>
          <img src={Skills} alt='skills' />
          <h2>Skills</h2>
          <p>Medieval skills like horse riding/ archery / wood chopping / sword fighting are good to have</p>
        </div>
      </div>
    )
  }
}
