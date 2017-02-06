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

  sub;
  public neardisabled: boolean = false;
  public gourmetdisabled: boolean = false;
  public accdisabled: boolean = false;
  public attrdisabled: boolean = false;

  public nearInfos = new Map();
  public sltNearInfos: marker[];
  @Output() sltNearsEvt: EventEmitter<Map<string, { values: string }>> = new EventEmitter<Map<string, { values: string }>>();

  constructor(private nearMenuService: NearMenuService) { }

  ngOnChanges() {
    if (this.nearDisabled != null) this.neardisabled = this.nearDisabled;
    if (this.accommodationDisabled != null) this.accdisabled = this.accommodationDisabled;
    if (this.attractionsDisabled != null) this.attrdisabled = this.attractionsDisabled;
    if (this.gourmetDisabled != null) this.gourmetdisabled = this.gourmetDisabled;
  }

  select() {
    let nears = document.getElementsByName('near');
    let key: string;
    for (var i = 0; i < nears.length; i++) {
      if ((<HTMLInputElement>nears[i]).checked) {
        key = nears[i].getAttribute('value');
        this.getNearInfo(key);
      }
    }
  }

  getNearInfo(key: string) {
    if (this.nearInfos.size == 0) {
      this.sub = this.nearMenuService.getNearInfo().subscribe(
        data => {
          this.nearInfos.set('gourmet', JSON.stringify(data.gourmet));
          this.nearInfos.set('accommodation', JSON.stringify(data.accommodation));
          this.nearInfos.set('attractions', JSON.stringify(data.attractions));
          this.emitData(key);
        },
        err => console.error(err),
        () => console.log('done loading NearInfo')
      );
    } else {
      this.emitData(key);
    }
  }

  emitData(key: string) {
    let sndData: Map<string, { values: string }> = new Map<string, { values: string }>();
    this.nearInfos.forEach(function (v, k) {
      if (key == k) {
        sndData.set(k, v);
      }
    });
    this.sltNearsEvt.emit(sndData);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
