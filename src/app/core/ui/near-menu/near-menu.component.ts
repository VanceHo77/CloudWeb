import { InfoWindowManager } from './../googlemap/core/services/managers/info-window-manager';
import { NearMenuService } from './near-menu.service';
import { marker } from './../googlemap/marker.class';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-near-menu',
  templateUrl: './near-menu.component.html',
  styleUrls: ['./near-menu.component.css'],
  providers: [NearMenuService]
})
export class NearMenuComponent implements OnChanges, OnDestroy {

  @Input() nearDisabled: boolean;
  @Input() accommodationDisabled: boolean;
  @Input() attractionsDisabled: boolean;
  @Input() gourmetDisabled: boolean;
  //是否執行重設
  @Input() isClear: boolean;

  sub;
  private neardisabled: boolean = false;
  private gourmetdisabled: boolean = false;
  private accdisabled: boolean = false;
  private attrdisabled: boolean = false;

  private nearInfos = new Map();
  private sltNearInfos: marker[];
  private oldLng: string;
  private oldLat: string;
  @Output() sltNearsEvt: EventEmitter<Map<string, { values: string }>> = new EventEmitter<Map<string, { values: string }>>();

  constructor(private nearMenuService: NearMenuService) { }

  ngOnChanges() {
    if (this.nearDisabled != null) this.neardisabled = this.nearDisabled;
    if (this.accommodationDisabled != null) this.accdisabled = this.accommodationDisabled;
    if (this.attractionsDisabled != null) this.attrdisabled = this.attractionsDisabled;
    if (this.gourmetDisabled != null) this.gourmetdisabled = this.gourmetDisabled;
    if (this.isClear) this.clear();
  }

  select() {
    let nears = document.getElementsByName('near');
    let keys: string[] = [];
    for (var i = 0; i < nears.length; i++) {
      if ((<HTMLInputElement>nears[i]).checked) {
        keys.push(nears[i].getAttribute('value'));
      }
    }
    if (keys.length == 0) {
      this.nearInfos = new Map();
      this.getNearInfo(keys);
    } else {
      this.getNearInfo(keys);
    }
  }

  getNearInfo(keys: string[]) {
    this.sub = this.nearMenuService.getNearInfo().subscribe(
      data => {
        this.nearInfos.set('gourmet', JSON.stringify(data.gourmet));
        this.nearInfos.set('accommodation', JSON.stringify(data.accommodation));
        this.nearInfos.set('attractions', JSON.stringify(data.attractions));
        this.emitData(keys);
      },
      err => console.error(err),
      () => console.log('done loading NearInfo')
    );
  }

  emitData(keys: string[]) {
    let sndData: Map<string, { values: string }> = new Map<string, { values: string }>();
    if (keys != null) {
      this.nearInfos.forEach(function (v, k) {
        for (let key of keys) {
          if (key == k) {
            sndData.set(k, v);
          }
        }
      });
    }
    this.sltNearsEvt.emit(sndData);
  }

  clear() {
    let nears = document.getElementsByName('near');
    for (var i = 0; i < nears.length; i++) {
      let d = <HTMLInputElement>nears[i];
      if (d.checked) {
        d.checked = false;
      }
    }
    this.nearInfos.clear();
  }

  ngOnDestroy() {
    if (this.sub != null) this.sub.unsubscribe();
  }
}
