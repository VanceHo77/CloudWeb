import { Toilet } from './toilet.class';
import { AppService } from './../../../app.service';
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
  providers: [HistoryService, ToiletService]
})
export class ToiletComponent implements OnInit {

  public toilet = new Toilet('', '', '');

  private serviceName: string;
  private content;
  private number;
  private totalElements;

  private sub;
  public districts: Array<string>;
  public villages: Array<string>;

  //Pagination
  public totalItems: number;
  public currentPage: number = 1;

  @Output() detailEvent = new EventEmitter();

  constructor(
    private toiletService: ToiletService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      let page = this.currentPage;

      if (params['page'] != null) page = params['page'];
      if (params['district'] != null) {
        this.toilet.district = params['district'].trim();
        this.getVillages(this.toilet.district);
      }
      if (params['village'] != null) this.toilet.village = params['village'].trim();
      if (params['address'] != null) this.toilet.address = params['address'].trim();
      this.getData(page.toString(), this.toilet);
    });
    //主要供使用瀏覽器進行上下頁操作時判斷
    let thr = document.getElementById("crumbsThrLayer");
    if (thr != null) thr.remove();
  }

  //每次做完组件view和子viw的變更檢測之後調用
  ngAfterViewChecked() {
    this.districts = AppService.districts;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public showDetail(id: string, itemName: string) {
    this.router.navigateByUrl('/life/toilet-detail?id=' + id);
  }

  public pageChanged(event: any, toilet: Toilet): void {
    this.onSubmit(event.page, toilet);
  };

  public changeDistrict(page, t: Toilet) {
    if (t.district == '') {
      this.villages = [];
      this.toilet.village = '';
    } else {
      this.getVillages(t.district);
    }
    this.onSubmit(page, this.toilet);
  }

  public onSubmit(page: string, qParams: Toilet) {
    this.getData(page, qParams);
  }

  getData(page: string, qParams: Toilet) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);
    if (qParams.district != '') {
      params.set('district', qParams.district);
    }
    if (qParams.address != '') {
      params.set('address', qParams.address);
    }
    if (qParams.village != '') {
      params.set('village', qParams.village);
    }

    this.sub = this.toiletService.getToilet(params).subscribe(
      data => {
        this.totalItems = data.totalElements;
        this.currentPage = parseInt(data.number) + 1;
        this.content = data.content;
      },
      err => console.error(err),
      () => console.log('done loading toilet')
    );
  }

  getVillages(district: string) {
    let params: URLSearchParams = new URLSearchParams();
    if (district != '') {
      params.set('district', district);
    }

    this.sub = this.toiletService.getVillages(params).subscribe(
      data => {
        this.villages = data;

      },
      err => console.error(err),
      () => console.log('done loading toilet-villages')
    );
  }

}
