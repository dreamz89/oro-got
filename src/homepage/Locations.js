import React, { Component } from 'react'
import Croatia from '../images/Croatia.jpg'
import Iceland from '../images/Iceland.jpg'
import Morocco from '../images/Morocco.jpg'
import NorthIreland from '../images/NorthIreland.jpg'
import Spain from '../images/Spain.jpg'
import { GridList, GridTile } from 'material-ui/GridList'

const tilesData = [
  {
    img: Croatia,
    title: 'Croatia'
  },
  {
    img: Iceland,
    title: 'Iceland'
  },
  {
    img: Morocco,
    title: 'Morocco'
  },
  {
    img: NorthIreland,
    title: 'North Ireland'
  },
  {
    img: Spain,
    title: 'Spain'
  }]

export default class Locations extends Component {
  render () {
    var locations = tilesData.map((tile) => {
      return (
        <GridTile
          key={tile.img}
          className='tile'
          title={tile.title}
          titleStyle={{color: 'white', fontSize: '16px'}}
          titleBackground='linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)' >
          <img src={tile.img} alt={tile.title} />
        </GridTile>
      )
    })
    return (
      <div className='locations'>
        <div className='container'>
          <h1>Locations</h1>
          <GridList cols={3} padding={15} cellHeight={200}>
            {locations}
          </GridList>
        </div>
      </div>
    )
  }
}
