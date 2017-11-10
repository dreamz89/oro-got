import React, { Component } from 'react'
import Croatia from '../images/Croatia.jpg'
import Iceland from '../images/Iceland.jpg'
import Morocco from '../images/Morocco.jpg'
import NorthIreland from '../images/NorthIreland.jpg'
import Spain from '../images/Spain.jpg'

export default class Locations extends Component {
  render () {
    return (
      <div>
        <h1>Locations</h1>
        <img src={Croatia} alt='Croatia' />
        <img src={Iceland} alt='Iceland' />
        <img src={Morocco} alt='Morocco' />
        <img src={NorthIreland} alt='NorthIreland' />
        <img src={Spain} alt='Spain' />
      </div>
    )
  }
}
