import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-near-menu',
  templateUrl: './near-menu.component.html',
  styleUrls: ['./near-menu.component.css']
})
export class NearMenuComponent implements OnChanges {

  @Input() nearDisabled: boolean;
  @Input() accommodationDisabled: boolean;
  @Input() attractionsDisabled: boolean;
  @Input() gourmetDisabled: boolean;

  public neardisabled: boolean = false;
  public gourmetdisabled: boolean = false;
  public accdisabled: boolean = false;
  public attrdisabled: boolean = false;

  constructor() { }

  ngOnChanges() {
    if (this.nearDisabled != null) this.neardisabled = this.nearDisabled;
    if (this.accommodationDisabled != null) this.accdisabled = this.accommodationDisabled;
    if (this.attractionsDisabled != null) this.attrdisabled = this.attractionsDisabled;
    if (this.gourmetDisabled != null) this.gourmetdisabled = this.gourmetDisabled;
  }
}
