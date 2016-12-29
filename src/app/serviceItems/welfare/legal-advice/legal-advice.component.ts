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
  
  sub;


  constructor(private legalAdviceService: LegalAdviceService) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.sub = this.legalAdviceService.getLegalAdvice().subscribe(
      data => {
        this.content = data.content;
      },
      err => console.error(err),
      () => console.log('done loading legal-advice')
    );
  }

}
