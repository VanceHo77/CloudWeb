import { DropdownObject } from './../../core/ui/dropdown/dropdown-object';

import { HeaderWebmenuService } from './header-webmenu.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-header-webmenu',
  templateUrl: './header-webmenu.component.html',
  styleUrls: ['./header-webmenu.component.css']
})
export class HeaderWebmenuComponent implements OnInit {

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public categorys: string[];
  public webMenus: Array<DropdownObject>;
  public mostClickMenus: Array<DropdownObject>;
  public lastModifyMenus: Array<DropdownObject>;
  public recommendMenus: Array<DropdownObject>;


  constructor(private webMenuService: HeaderWebmenuService) { }

  ngOnInit() {
    this.getWebMenus();
  }

  private getWebMenus() {
    this.webMenus = this.webMenuService.getWebMenus();
    this.mostClickMenus = this.webMenuService.getMostClickServiceMenus();
    this.lastModifyMenus = this.webMenuService.getLastModifyServiceMenus();
    this.recommendMenus = this.webMenuService.getRecommondServiceMenus();
    this.categorys = this.webMenuService.getCategory();
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
