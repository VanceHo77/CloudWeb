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
  public zoom: number = 12;
  // 資料來源
  @Input() public jsonDataSource: marker[];;
  // 用於顯示gmap上的點位資料
  public markers: marker[];

  private baseUrl = 'app/core/ui/googlemap/icon/';
  public gourmet_iconurl: string = this.baseUrl + 'blue-dot.png';
  public accommodation_iconurl: string = this.baseUrl + 'green-dot.png';
  public attractions: string = this.baseUrl + 'purple-dot.png';


  ngOnChanges() {
    if (this.jsonDataSource != null) {
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
    }
  }

}

