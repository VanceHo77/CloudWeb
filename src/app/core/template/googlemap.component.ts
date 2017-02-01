import { marker } from './../ui/googlemap/marker.class';
import { AppService } from './../../app.service';
import { HeaderWebmenuService } from './../../header/header-webmenu/header-webmenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-googlemap',
    templateUrl: './googlemap.component.html',
    styleUrls: []
})
export class GooglemapComponent {
    // 資料來源
    @Input() public jsonDataSource: marker[];

    public jsonData: marker[];

    districtChange(districts: string[]) {
        this.jsonData = [];
        if (districts != null || districts.length > 0) {
            var tmpData = this.jsonDataSource.slice(0);
            for (let dist of districts) {
                for (var i = 0; i < tmpData.length; i++) {
                    if (tmpData != null && tmpData[i].address.indexOf(dist) > -1) {
                        this.jsonData.push(tmpData[i]);
                    }
                }
            }
        }

    }
}
