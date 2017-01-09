import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit() {
    //紀錄瀏覽器上下頁
    window.onpopstate = function (event) {
      let urlStr =document.location.toString();
      var obj = { title: urlStr, url: urlStr };
      history.replaceState(obj, obj.title, obj.url);
    };
  }
}
