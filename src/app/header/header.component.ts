import { HeaderWebmenuService } from './header-webmenu/header-webmenu.service';
import { Component, OnInit, ElementRef, Inject } from '@angular/core';


import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderWebmenuService]
})
export class HeaderComponent {

  elementRef: ElementRef;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngAfterViewInit() {
    jQuery(this.elementRef.nativeElement)
      .find('#dialog')
      .dialog({
        autoOpen: false,
        modal: false,
      });

    $(".ui-icon-closethick").bind('click', function () {
      $(".ui-dialog").toggle();
    });
  }

  displayWeather(event: Event) {
    event.preventDefault();
    //因使用原API提供方式無法正常開啟Dialog，故自己設定顯示/隱藏
    $(".ui-dialog").toggle();
    let offset = $("#imgWeather").offset();
    $('.ui-dialog')[0].setAttribute('style', 'position:absolute;top:' + (offset.top + 50) + 'px;left:' + offset.left + 'px;');
  }
}
