import { DropdownObject } from './../core/ui/dropdown/dropdown-object';
import { IndexService } from './index.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexService]
})
export class IndexComponent implements OnInit {

  public allServiceHighLights: Array<DropdownObject>;

  constructor(private appService: IndexService) { }

  ngOnInit() {
    this.getServiceHighLights();
  }

  getServiceHighLights() {
    this.allServiceHighLights = this.appService.getServiceHighlights();
  }
}
