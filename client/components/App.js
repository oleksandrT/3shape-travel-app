'use strict';

import { h, Component } from 'preact'
import Router from 'preact-router'

import KievComponent from './KievComponent'
import CopenhagenComponent from './CopenhagenComponent'

import CityChoosingComponent from './CityChoosingComponent'
import MapComponent from './MapComponent'

import 'preact/devtools'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      searches: []
    }
    //this.addSearch = this.addSearch.bind(this)
  }

  render (props, state) {
    return (
      <div>
        <div>
          <nav>
            <a href="/Kiev">Kiev</a><br/>
            <a href="/Copenhagen">Copenhagen</a><br/>
            <a href="/Map">Map</a>
          </nav>
         </div> 
        <Router>
          <CityChoosingComponent path="/chooseCity" default/>
          <KievComponent path="/Kiev" />
          <CopenhagenComponent path="/Copenhagen" />
          <MapComponent path="/Map" />
        </Router>
      </div>
    )
  }
}



