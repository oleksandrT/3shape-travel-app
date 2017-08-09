'use strict';

import { h, Component } from 'preact'

import 'preact/devtools'

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
        <p>Address</p>
        <img src="" alt="map" />
        <ul>
          <li onClick={this.changeMap}>Hotel</li>
          <li>Office</li>
        </ul>
      </div>
    )
  }
}



