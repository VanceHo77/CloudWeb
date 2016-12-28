import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css']
})
export class LegalAdviceComponent {

  serviceName: string;
  sub;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.serviceName = params['sname'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
