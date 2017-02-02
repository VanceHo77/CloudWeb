import { AppService } from './../../../app.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-distrct-menu',
  templateUrl: './distrct-menu.component.html',
  styleUrls: ['./distrct-menu.component.css']
})
export class DistrctMenuComponent {

  public districts: string[];
  public selects: string[];
  @Output() selectsEvt: EventEmitter<string[]> = new EventEmitter<string[]>();

  ngDoCheck() {
    if (AppService.districts.length > 0 && this.districts == null) {
      this.districts = AppService.districts;
    }
  }

  select() {
    let sltDistricts: string[] = [];
    let districts = document.getElementsByName('dist');
    for (var i = 0; i < districts.length; i++) {
      if ((<HTMLInputElement>districts[i]).checked) {
        sltDistricts.push(districts[i].getAttribute('value'))
      }
    }
    this.selectsEvt.emit(sltDistricts);
  }

  selectAll() {
    this.changeChecked(true);
    this.selectsEvt.emit(this.districts);
  }

  clear() {
    this.changeChecked(false);
    this.selectsEvt.emit([]);
  }

  changeChecked(status: boolean) {
    let districts = document.getElementsByName('dist');
    for (var i = 0; i < districts.length; i++) {
      let d = <HTMLInputElement>districts[i];
      if (status) {
        d.checked = status;
      } else {
        d.checked = status;
      }
    }
  }
}
