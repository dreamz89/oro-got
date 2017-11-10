import React, { Component } from 'react'
import Cover from './Cover.js'
import Locations from './Locations.js'
import Requirements from './Requirements.js'
import Reviews from './Reviews.js'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Cover />
        <Locations />
        <Requirements />
        <Reviews />
      </div>
    )
  }
}
