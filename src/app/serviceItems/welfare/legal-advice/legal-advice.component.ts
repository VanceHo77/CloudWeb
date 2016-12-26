import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css']
})
export class LegalAdviceComponent {

  serviceName: string;
  sub;

  constructor(private route: ActivatedRoute) { }

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.serviceName = params['serviceName'];
      console.log(params['serviceName']);
    });
  }
  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
