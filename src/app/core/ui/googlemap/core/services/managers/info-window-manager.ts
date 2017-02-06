import { Injectable, NgZone } from '@angular/core';

import { SebmGoogleMapInfoWindow } from '../../directives/google-map-info-window';

import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { InfoWindow, InfoWindowOptions } from '../google-maps-types';
import { MarkerManager } from './marker-manager';

@Injectable()
export class InfoWindowManager {
  private _infoWindows: Map<SebmGoogleMapInfoWindow, Promise<InfoWindow>> =
  new Map<SebmGoogleMapInfoWindow, Promise<InfoWindow>>();

  public static Lng: string = '';
  public static Lat: string = '';

  constructor(
    private _mapsWrapper: GoogleMapsAPIWrapper, private _zone: NgZone,
    private _markerManager: MarkerManager) { }

  deleteInfoWindow(infoWindow: SebmGoogleMapInfoWindow): Promise<void> {
    const iWindow = this._infoWindows.get(infoWindow);
    if (iWindow == null) {
      // info window already deleted
      return Promise.resolve();
    }
    return iWindow.then((i: InfoWindow) => {
      return this._zone.run(() => {
        i.close();
        this._infoWindows.delete(infoWindow);
      });
    });
  }

  setPosition(infoWindow: SebmGoogleMapInfoWindow): Promise<void> {
    return this._infoWindows.get(infoWindow).then((i: InfoWindow) => i.setPosition({
      lat: infoWindow.latitude,
      lng: infoWindow.longitude
    }));
  }

  setZIndex(infoWindow: SebmGoogleMapInfoWindow): Promise<void> {
    return this._infoWindows.get(infoWindow)
      .then((i: InfoWindow) => i.setZIndex(infoWindow.zIndex));
  }

  open(infoWindow: SebmGoogleMapInfoWindow): Promise<void> {
    // 開啟一個視窗就關閉其他視窗
    this._infoWindows.forEach((value: Promise<InfoWindow>, key: SebmGoogleMapInfoWindow) => {
      if (key.isOpen) {
        key.close();
      }
    });

    return this._infoWindows.get(infoWindow).then((w) => {
      if (infoWindow.hostMarker != null) {
        return this._markerManager.getNativeMarker(infoWindow.hostMarker).then((marker) => {
          InfoWindowManager.Lat = infoWindow.latitude.toString();
          InfoWindowManager.Lng = infoWindow.longitude.toString();
          return this._mapsWrapper.getNativeMap().then((map) => w.open(map, marker));
        });
      }
      return this._mapsWrapper.getNativeMap().then((map) => w.open(map));
    });
  }

  close(infoWindow: SebmGoogleMapInfoWindow): Promise<void> {
    return this._infoWindows.get(infoWindow).then((w) => w.close());
  }

  setOptions(infoWindow: SebmGoogleMapInfoWindow, options: InfoWindowOptions) {
    return this._infoWindows.get(infoWindow).then((i: InfoWindow) => i.setOptions(options));
  }

  addInfoWindow(infoWindow: SebmGoogleMapInfoWindow) {
    const options: InfoWindowOptions = {
      content: infoWindow.content,
      maxWidth: infoWindow.maxWidth,
      zIndex: infoWindow.zIndex,
    };
    if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
      options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
    }
    const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
    this._infoWindows.set(infoWindow, infoWindowPromise);
  }
}
