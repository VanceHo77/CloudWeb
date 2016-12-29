import { LegalAdviceService } from './legal-advice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: '',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css'],
  providers: [LegalAdviceService]
})
export class LegalAdviceComponent {

  serviceName: string;
  sub;
  public jsonContent;

  constructor(private route: ActivatedRoute, private router: Router, private legalAdviceService: LegalAdviceService) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.serviceName = params['sname'];
    });
    this.jsonContent = this.getData();
    console.log(this.getData());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.legalAdviceService.getLegalAdvice().subscribe(
      data => { this.jsonContent = data.content },
      err => console.error(err),
      () => console.log('done loading legal-advice')
    );
  }

}
