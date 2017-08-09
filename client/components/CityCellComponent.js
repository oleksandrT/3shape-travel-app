'use strict';

import { h, Component } from 'preact'
import 'preact/devtools'

export default class CityCellComponent extends Component {
  render (props, state) {

    let cityUrl = "/" + props.name;
    

    return (
        <div class="city-cell">
            <a class="city-cell-link flex flex-centered" href={cityUrl}>
                <img class="city-cell-image" src={props.imgSrc} />
                <span>{props.name}</span>     
            </a>       
        </div>
    )
  }
}
