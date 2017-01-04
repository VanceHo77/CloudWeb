import { HistoryService } from './../../../../core/history/history.Service';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

import { StrongSkillsDetailService } from './strong-skills-detail.service';
import { Component, OnInit, enableProdMode } from '@angular/core';

// 在Component中連續修改同一個值，會產生錯誤(Expression has changed after it was checked.)
//需要加入enableProdMode();
enableProdMode();

@Component({
  selector: 'app-strong-skills',
  templateUrl: './strong-skills-detail.component.html',
  providers: [HistoryService, StrongSkillsDetailService]
})
export class StrongSkillsDetailComponent implements OnInit {

  private serviceName: string;
  private content;
  private sub;


  constructor(
    private strongSkillsService: StrongSkillsDetailService,
    private route: ActivatedRoute) { }


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

    this.sub = this.strongSkillsService.getStrongSkillsDetail(params).subscribe(
      data => {
        this.content = data.content;
      },
      err => console.error(err),
      () => console.log('done loading legal-advice detail')
    );
  }

}
