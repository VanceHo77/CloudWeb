import { AppService } from './../../../app.service';
import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { ActivatedRoute, Router } from '@angular/router';

import { StrongSkillsService } from './strong-skills.service';
import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';

// 在Component中連續修改同一個值，會產生錯誤(Expression has changed after it was checked.)
//需要加入enableProdMode();
enableProdMode();

@Component({
  selector: 'app-strong-skills',
  templateUrl: './strong-skills.component.html',
  styleUrls: ['./strong-skills.component.css'],
  providers: [AppService, HistoryService, StrongSkillsService]
})
export class StrongSkillsComponent implements OnInit {

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
    private strongSkillsService: StrongSkillsService,
    public appService: AppService,
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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  @Output() detailEvent = new EventEmitter();

  public showDetail(id: string, itemName: string) {
    this.router.navigateByUrl('/welfare/strongSkills-detail?id=' + id);
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


    this.sub = this.strongSkillsService.getStrongSkills(params).subscribe(
      data => {
        this.totalItems = data.totalElements;
        this.currentPage = parseInt(data.number) + 1;
        this.content = data.content;
      },
      err => console.error(err),
      () => console.log('done loading legal-advice')
    );
  }

}
