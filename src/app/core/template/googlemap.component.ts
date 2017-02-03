import { marker } from './../ui/googlemap/marker.class';
import { AppService } from './../../app.service';
import { HeaderWebmenuService } from './../../header/header-webmenu/header-webmenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-googlemap',
    templateUrl: './googlemap.component.html',
    styleUrls: []
})
export class GooglemapComponent implements OnChanges {
    // 資料來源
    @Input() public jsonDataSource: marker[];
    // 是否顯示附近店家資訊選項
    @Input() public nearDisabled: boolean;
    // 是否顯示附近美食
    @Input() public gourmetDisabled: boolean;
    // 是否顯示附近住宿
    @Input() public accommodationDisabled: boolean;
    // 是否顯示附近景點
    @Input() public attractionsDisabled: boolean;

    public jsonData: marker[];
    public neardisabled: boolean;
    public gourmetdisabled: boolean;
    public accdisabled: boolean;
    public attrdisabled: boolean;

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
    ngOnChanges() {
        if (this.nearDisabled == null) {
            this.neardisabled = null;
        } else {
            this.neardisabled = this.nearDisabled;
        }
        if (this.gourmetDisabled == null) {
            this.gourmetdisabled = null;
        } else {
            this.gourmetdisabled = this.gourmetDisabled;
        }
        if (this.accommodationDisabled == null) {
            this.accdisabled = null;
        } else {
            this.accdisabled = this.accommodationDisabled;
        }
        if (this.attractionsDisabled == null) {
            this.attrdisabled = null;
        } else {
            this.attrdisabled = this.attractionsDisabled;
        }
    }
}
