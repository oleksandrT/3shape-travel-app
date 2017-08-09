'use strict';

import { h, Component } from 'preact'
import CityCellComponent from './CityCellComponent'
import cities from '../cities.json';

export default class CityChoosingComponent extends Component {
  render (props, state) {

    return (
        <div>
            <div>
                <img class="logo" src="/images/3Shape Travel logo-01.svg"/>
            </div>    
            <div class="flex flex-centered">
                {cities.cities.map(function(city, i){
                    return <CityCellComponent key={i} name={city.name} imgSrc={city.imgSrc}/> 
                })}
            </div>
        </div>
    )
  }
}
