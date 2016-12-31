import { AppService } from './../../app.service';

import { HeaderWebmenuService } from './header-webmenu.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-header-webmenu',
  templateUrl: './header-webmenu.component.html',
  styleUrls: ['./header-webmenu.component.css'],
  providers: [AppService]
})
export class HeaderWebmenuComponent implements OnInit {

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public categorys: string[];
  public webMenus;
  public mostClickMenus;
  public lastModifyMenus;
  public recommendMenus;
  sub;


  constructor(public webMenuService: HeaderWebmenuService) { }

  ngOnInit() {
    this.getWebMenus();
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  private getWebMenus() {
    this.sub = this.webMenuService.getWebMenus().subscribe(
      data => { this.webMenus = data },
      err => console.error(err),
      () => console.log('done loading WebMenus')
    );
    this.sub = this.webMenuService.getMostClickServiceMenus().subscribe(
      data => { this.mostClickMenus = data },
      err => console.error(err),
      () => console.log('done loading MostClickServiceMenus')
    );
    this.sub = this.webMenuService.getLastModifyServiceMenus().subscribe(
      data => { this.lastModifyMenus = data },
      err => console.error(err),
      () => console.log('done loading LastModifyServiceMenus')
    );
    this.sub = this.webMenuService.getRecommondServiceMenus().subscribe(
      data => { this.recommendMenus = data },
      err => console.error(err),
      () => console.log('done loading RecommondServiceMenus')
    );
    this.sub = this.webMenuService.getCategory().subscribe(
      data => { this.categorys = data },
      err => console.error(err),
      () => console.log('done loading Category')
    );
  }


  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
