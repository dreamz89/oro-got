import React, { Component } from 'react'
import AboveTheFold from './AboveTheFold.js'
import Locations from './Locations.js'
import Requirements from './Requirements.js'
import Reviews from './Reviews.js'

export default class Home extends Component {
  render () {
    return (
      <div>
        <AboveTheFold />
        <Locations />
        <Requirements />
        <Reviews />
      </div>
    )
  }
}
