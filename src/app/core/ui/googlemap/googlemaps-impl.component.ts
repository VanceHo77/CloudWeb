import { marker } from './marker.class';
import { GoogleMapsAPIWrapper } from './core/services/google-maps-api-wrapper';
import { MarkerManager } from './core/services/managers/marker-manager';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'googlemaps-root',
  templateUrl: './googlemaps-impl.component.html',
  styleUrls: ['./googlemaps-implcomponent.css'],
  providers: [MarkerManager, GoogleMapsAPIWrapper]
})
export class GoogleMapsImplComponent {
  public title: string = 'My first angular 2 google maps example';
  public lat: number = 24.979690;
  public lng: number = 121.253992;
  public markers: marker[] = [
    {
      lat: 24.970823,
      lng: 121.191004,
      label: '央大',
      draggable: true
    }, {
      lat: 24.979690,
      lng: 121.253992,
      label: '預設值',
      draggable: true
    }
  ];

  selectMyHome(){
    this.markers = [ {
      lat: 24.176304,
      lng: 120.535251,
      label: '預設值',
      draggable: true
    }]
  }
}

