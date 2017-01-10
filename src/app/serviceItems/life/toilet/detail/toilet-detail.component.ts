import { CrumbsService } from './../../../../core/ui/crumbs/crumbs.service';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ToiletDetailService } from './toilet-detail.service';
import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';

// 在Component中連續修改同一個值，會產生錯誤(Expression has changed after it was checked.)
//需要加入enableProdMode();
enableProdMode();

@Component({
  selector: 'app-toilet',
  templateUrl: './toilet-detail.component.html',
  providers: [ToiletDetailService,CrumbsService]
})
export class ToiletDetailComponent implements OnInit {

  private serviceName: string;
  private content;
  private sub;


  constructor(
    private toiletDetailService: ToiletDetailService,
    private route: ActivatedRoute,
    private crumbsService:CrumbsService) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      if (params['id'] != null && params['id'] != '') {
        this.getData(params['id']);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  @Output() detailEvent = new EventEmitter();

  getData(id: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);

    this.sub = this.toiletDetailService.getToiletDetail(params).subscribe(
      data => {
        this.content = data.content;
        this.crumbsService.createThrLayer(this.content[0].name);
      },
      err => console.error(err),
      () => console.log('done loading toilet-detail')
    );
  }

}
