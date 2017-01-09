import { ToiletService } from './toilet.service';
import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';

// 在Component中連續修改同一個值，會產生錯誤(Expression has changed after it was checked.)
//需要加入enableProdMode();
enableProdMode();

@Component({
  selector: 'app-toilet',
  templateUrl: './toilet.component.html',
  styleUrls: ['./toilet.component.css'],
  providers: [ HistoryService, ToiletService]
})
export class ToiletComponent implements OnInit {

  private serviceName: string;
  private content;
  private number;
  private totalElements;
  private totalPages;
  private sub;

  //Pagination
  public totalItems: number;
  public currentPage: number = 1;

  constructor(
    private toiletService: ToiletService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      var page = this.currentPage;
      var name = "";
      if (params['page'] != null) {
        page = params['page'];
      }
      if (params['name'] != null) {
        name = params['name'].trim();
      }
      this.getData(page.toString(), name);
    });
    //主要供使用瀏覽器進行上下頁操作時判斷
    let thr = document.getElementById("crumbsThrLayer");
    if (thr != null) thr.remove();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @Output() detailEvent = new EventEmitter();

  public showDetail(id: string, itemName: string) {
    this.router.navigateByUrl('/life/toilet?id=' + id);
  }

  public pageChanged(queryStr: string, event: any): void {
    this.getData(event.page, queryStr);
  };

  public clickQuery(queryStr: string) {
    this.getData(this.currentPage.toString(), queryStr.trim());
  }

  public enterQuery(event: Event) {
    this.getData(this.currentPage.toString(), (<HTMLInputElement>event.target).value.trim());
  }

  getData(page: string, queryStr: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);
    if (queryStr != '') {
      params.set('name', queryStr);
    }


    this.sub = this.toiletService.getStrongSkills(params).subscribe(
      data => {
        this.totalItems = data.totalElements;
        this.currentPage = parseInt(data.number) + 1;
        this.content = data.content;
      },
      err => console.error(err),
      () => console.log('done loading toilet')
    );
  }

}
