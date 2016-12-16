import { HeaderWebmenuService } from './header-webmenu/header-webmenu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[HeaderWebmenuService]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
