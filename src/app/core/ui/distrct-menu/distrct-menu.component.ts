import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrct-menu',
  templateUrl: './distrct-menu.component.html',
  styleUrls: ['./distrct-menu.component.css']
})
export class DistrctMenuComponent {

  public districts: Array<string>;
  public status: boolean = false;

  ngDoCheck() {
    if (AppService.districts.length > 0 && this.districts == null) {
      this.districts = AppService.districts;
    }
  }

  selectAll() {
    this.status = true;
  }

  clear() {
    this.status = false;
  }
}
