import React, { Component } from 'react'
import Hair from '../images/man.svg'
import Discretion from '../images/chatting.svg'
import Skills from '../images/horseriding.svg'

export default class Requirements extends Component {
  render () {
    return (
      <div className='container'>
        <h1>Requirements</h1>
        <p>Besides being reliable and flexible, people whose looks fit the medieval scenes would be great</p>
        <div className='col'>
          <img src={Hair} alt='Long hair man' />
          <h3>Long Hair</h3>
          <p>For men, the longer hair the better, for a medieval look.</p>
        </div>
        <div className='col'>
          <img src={Discretion} alt='discretion' />
          <h3>Discretion</h3>
          <p>Do not approach actors, unless they approach you first. Do not write on social media or tell friends and family about the filming.</p>
        </div>
        <div className='col'>
          <img src={Skills} alt='skills' />
          <h3>Skills</h3>
          <p>Medieval skills like horse riding/ archery / wood chopping / sword fighting are good to have</p>
        </div>
      </div>
    )
  }
}
