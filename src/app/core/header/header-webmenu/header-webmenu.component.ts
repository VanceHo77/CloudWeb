import { HeaderWebmenuService } from './header-webmenu.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-header-webmenu',
  templateUrl: './header-webmenu.component.html',
  styleUrls: ['./header-webmenu.component.css']
})
export class HeaderWebmenuComponent implements OnInit {

  public webMenus;

  constructor(private webMenuService: HeaderWebmenuService) { }

  ngOnInit() {
    this.getWebMenus();
  }

  private getWebMenus() {
    this.webMenuService.getWebMenus().subscribe(
      data => { this.webMenus = data },
      err => console.error(err),
      () => console.log('done loading webMenu.')
    );
  }

}
