import { InfoWindowManager } from './core/services/managers/info-window-manager';
import { marker } from './marker.class';
import { GoogleMapsAPIWrapper } from './core/services/google-maps-api-wrapper';
import { MarkerManager } from './core/services/managers/marker-manager';

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'googlemaps-root',
  templateUrl: './googlemaps-impl.component.html',
  styleUrls: ['./googlemaps-implcomponent.css'],
  providers: [MarkerManager, GoogleMapsAPIWrapper]
})
export class GoogleMapsImplComponent {
  // 預設位置
  public defLat: number = 24.979690;
  public defLng: number = 121.253992;
  // 放大倍數
  public zoom: number = 11;
  // 資料來源
  @Input() public jsonDataSource: marker[];
  // 附近店家資料
  @Input() public gouJsonDataSource: marker[];
  @Input() public accJsonDataSource: marker[];
  @Input() public attJsonDataSource: marker[];
  // 用於顯示gmap上的點位資料
  public markers: marker[];
  // 用於顯示gmap上的附近店家點位資料
  public gouMarkers: marker[] = [];
  public accMarkers: marker[] = [];
  public attMarkers: marker[] = [];

  private baseUrl = 'app/core/ui/googlemap/icon/';
  private gourmet_iconurl = this.baseUrl + 'blue-dot.png';
  private accommodation_iconurl = this.baseUrl + 'green-dot.png';
  private attractions_iconurl = this.baseUrl + 'yellow-dot.png';
  private oldjsonDataLen: number = 0;

  ngOnChanges() {
    if (this.jsonDataSource != null && this.jsonDataSource.length > 0 ) {
      this.oldjsonDataLen = this.jsonDataSource.length;
      let tmp: marker[] = [];
      let px: string;
      let py: string;
      let tyWebsite: string;
      let website: string;

      for (let marker of this.jsonDataSource) {
        px = marker.px.toString();
        py = marker.py.toString();
        tyWebsite = marker.tyWebsite.trim();
        website = marker.website.trim();

        if (tyWebsite != '') {
          if (tyWebsite.indexOf('http:')) tyWebsite = 'http://' + tyWebsite;
          tyWebsite = '<a href="' + tyWebsite + '" target="_blank">' + tyWebsite + '</a>';
        }
        if (website != '') website = '<a href="' + website + '" target="_blank">' + website + '</a>';

        tmp.push(<marker>{
          px: parseFloat(px),
          py: parseFloat(py),
          name: marker.name,
          title: marker.name,
          tolDescribe: marker.tolDescribe,
          tyWebsite: tyWebsite,
          address: marker.address,
          zipCode: marker.zipCode,
          travellingInfo: marker.travellingInfo,
          openTime: marker.openTime,
          website: website,
          parkingInfo: marker.parkingInfo,
          remarks: marker.remarks,
          tel: marker.tel,
          fax: marker.fax,
          changeTime: marker.changeTime,
          charge: marker.charge,
          draggable: false
        });
      }
      this.markers = tmp;
    } else if (this.jsonDataSource == null || this.jsonDataSource.length == 0) {
      this.markers = [];
      this.gouJsonDataSource = [];
      this.accJsonDataSource = [];
      this.attJsonDataSource = [];
    }

    if (this.gouJsonDataSource != null) {
      this.gouMarkers = this.nearChange(this.gouJsonDataSource);
    }
    if (this.accJsonDataSource != null) {
      this.accMarkers = this.nearChange(this.accJsonDataSource);
    }
    if (this.attJsonDataSource != null) {
      this.attMarkers = this.nearChange(this.attJsonDataSource);
    }

  }

  nearChange(sourceData: marker[]) {
    if (sourceData.length == 0) {
      return [];
    }
    let tmp: marker[] = [];
    let px: string;
    let py: string;
    let tyWebsite: string;
    let website: string;

    for (let marker of sourceData) {
      px = marker.px.toString();
      py = marker.py.toString();
      website = marker.website.trim();

      if (website != '') website = '<a href="' + website + '" target="_blank">' + website + '</a>';
      tmp.push(<marker>{
        px: parseFloat(px),
        py: parseFloat(py),
        name: marker.name,
        title: marker.name,
        tolDescribe: marker.tol_describe,
        address: marker.address,
        openTime: marker.openTime,
        website: website,
        parkingInfo: marker.parking_info,
        tel: marker.tel,
        charge: marker.charge,
        draggable: false
      });
    }
    return tmp;
  }

}

