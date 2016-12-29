import { ActivatedRoute, Router } from '@angular/router';
import { LegalAdviceService } from './legal-advice.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: '',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css'],
  providers: [LegalAdviceService]
})
export class LegalAdviceComponent {

  private serviceName: string;
  private content;
  private number;
  private totalElements;
  private totalPages;
  private sub;

  //Pagination
  public totalItems: number;
  public currentPage: number = 0;
  public maxSize: number = 10;

  constructor(
    private legalAdviceService: LegalAdviceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      var page;
      if (params['page'] != null) {
        page = parseInt(params['page']);
      }
      if (params['pageSize'] != null) {
        this.maxSize = parseInt(params['pageSize']);
      }
      this.getData(this.currentPage, this.maxSize);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public pageChanged(event: any): void {
    this.sub = this.route.queryParams.subscribe(params => {
      this.getData(event.page, this.maxSize);
    });
  };


  getData(pageNum: number, pageSize: number) {
    this.sub = this.legalAdviceService.getLegalAdvice(pageNum, pageSize).subscribe(
      data => {
        this.totalItems = data.totalElements;
        this.currentPage = parseInt(data.number) + 1;
        this.maxSize = data.size;
        this.content = data.content;
        console.log('curpage:' + parseInt(data.number));
      },
      err => console.error(err),
      () => console.log('done loading legal-advice')
    );
  }

}
