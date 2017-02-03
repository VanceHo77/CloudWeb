import { IndexService } from './index.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit, OnDestroy {

  public allServiceHighLights;
  sub;

  constructor(private appService: IndexService) { }

  ngOnInit() {
    this.getServiceHighLights();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getServiceHighLights() {
    this.sub = this.appService.getServiceHighlights().subscribe(
      data => { this.allServiceHighLights = data },
      err => console.error(err),
      () => console.log('done loading ServiceHighlights')
    );
  }
}
