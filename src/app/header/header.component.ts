import { HeaderService } from './header.service';
import { HeaderWebmenuService } from './header-webmenu/header-webmenu.service';
import { Component, ElementRef, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderWebmenuService, HeaderService]
})
export class HeaderComponent {
  sub;
  elementRef: ElementRef;
  release: string;
  weatherContent: string;

  constructor( @Inject(ElementRef) elementRef: ElementRef, private headerService: HeaderService) {
    this.elementRef = elementRef;
  }

  ngAfterViewInit() {
    //天氣快報
    jQuery(this.elementRef.nativeElement)
      .find('#dialog')
      .dialog({
        autoOpen: false,
        modal: false,
      });

    $(".ui-icon-closethick").bind('click', function () {
      $(".ui-dialog").toggle();
    });
    //取得天氣快報內容
    this.getData();
  }

  displayWeather(event: Event) {
    event.preventDefault();
    //因使用原API提供方式無法正常開啟Dialog，故自己設定顯示/隱藏
    $(".ui-dialog").toggle();
    let offset = $("#imgWeather").offset();
    $('.ui-dialog')[0].setAttribute('style', 'font-family: 微軟正黑體;max-width:400px;position:absolute;top:' + (offset.top + 50) + 'px;left:' + (offset.left - 280) + 'px;');
  }

  getData() {
    this.sub = this.headerService.getWeather().subscribe(
      data => {
        this.release = data[0].release;
        this.weatherContent = data[0].content;
      },
      err => console.error(err),
      () => console.log('done loading weather')
    );
  }
}
