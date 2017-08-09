'use strict';

import { h, Component } from 'preact'
import Router from 'preact-router'

import KievComponent from './KievComponent'
import CopenhagenComponent from './CopenhagenComponent'

import CityChoosingComponent from './CityChoosingComponent'

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
            <a href="/Copenhagen">Copenhagen</a>
          </nav>
         </div> 
        <Router>
          <CityChoosingComponent path="/chooseCity" default/>
          <KievComponent path="/Kiev" />
          <CopenhagenComponent path="/Copenhagen" />
        </Router>
      </div>
    )
  }
}



