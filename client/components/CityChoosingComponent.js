'use strict';

import { h, Component } from 'preact'
import CityCellComponent from './CityCellComponent'


export default class CityChoosingComponent extends Component {
  render (props, state) {

    return (
        <div class="flex flex-centered">
            <CityCellComponent name="Copenhagen" imgSrc="http://www.imghost.in/img/2017-08/09/jvcv7mnjmbnkqukztxuewob86.png"/> 
            <CityCellComponent name="Kiev" imgSrc="http://www.imghost.in/img/2017-08/09/nlvdqryuj3yozlcg6r2eft78a.png"/> 
        </div>
    )
  }
}
