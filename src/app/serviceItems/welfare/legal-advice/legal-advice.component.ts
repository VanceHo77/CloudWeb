import { HistoryService } from './../../../core/history/history.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalAdviceService } from './legal-advice.service';
import { Component, enableProdMode, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// 在Component中連續修改同一個值，會產生錯誤(Expression has changed after it was checked.)
//需要加入enableProdMode();
enableProdMode();

@Component({
  selector: '',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css'],
  providers: [HistoryService, LegalAdviceService]
})
export class LegalAdviceComponent implements OnInit, OnDestroy {

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
    private legalAdviceService: LegalAdviceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      var page;
      if (params['page'] == null) {
        page = this.currentPage;
      } else {
        page = parseInt(params['page']);
      }
      this.getData(this.currentPage);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public pageChanged(event: any): void {
    this.sub = this.route.queryParams.subscribe(params => {
      this.getData(event.page);
    });
  };


  getData(pageNum: number) {
    this.sub = this.legalAdviceService.getLegalAdvice(pageNum).subscribe(
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
