import { CrumbsService } from './../../../../core/ui/crumbs/crumbs.service';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ToiletDetailService } from './toilet-detail.service';
import { Component, OnInit, enableProdMode, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toilet',
  templateUrl: './toilet-detail.component.html',
  providers: [ToiletDetailService, CrumbsService]
})
export class ToiletDetailComponent implements OnInit, OnDestroy {

  private content;
  private sub;


  constructor(
    private toiletDetailService: ToiletDetailService,
    private crumbsService: CrumbsService,
    private route: ActivatedRoute,
    private router: Router) { }


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
