'use strict';

import { h, Component } from 'preact'
import CityCellComponent from './CityCellComponent'
import cities from '../cities.json';

export default class CityChoosingComponent extends Component {
  render (props, state) {

    return (
        <div class="flex flex-centered">
            {cities.cities.map(function(city, i){
                return <CityCellComponent key={i} name={city.name} imgSrc="http://www.imghost.in/img/2017-08/09/jvcv7mnjmbnkqukztxuewob86.png"/> 
            })}
        </div>
    )
  }
}
