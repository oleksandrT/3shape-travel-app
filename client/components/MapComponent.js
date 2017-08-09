'use strict';

import { h, Component } from 'preact'

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
        Map
      </div>
    )
  }
}



