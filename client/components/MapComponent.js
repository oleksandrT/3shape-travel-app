'use strict';

import { h, Component } from 'preact'
import 'preact/devtools'

import data from '../cities.json'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      searches: []
    }
    this.changeMap = this.changeMap.bind(this)
  }

  changeMap() {
    console.log('changeMap');
  }

  render (props, state) {
    return (
      <div>
        <p>{data.maps.copenhagenOffice}</p>
        <img src="/images/maps/map_copenhagen_office.jpg" alt="map" />
        <ul>
          <li onClick={this.changeMap}>Hotel</li>
          <li>Office</li>
        </ul>
      </div>
    )
  }
}



