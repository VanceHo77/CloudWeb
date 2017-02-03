import { AppService } from './../../../app.service';
import { HistoryService } from './../../../core/history/history.Service';
import { AccommodationService } from './accommodation.service';
import { Component, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  providers: [HistoryService, AppService, AccommodationService]
})
export class AccommodationComponent implements  OnDestroy {
  sub;

  @Output() public jsonData: any;

  constructor(private accommodationService: AccommodationService) { }

  ngAfterViewInit() {
    this.getAccommodation();
  }

  getAccommodation() {
    this.sub = this.accommodationService.getAccommodation().subscribe(
      data => {
        this.jsonData = data;
      },
      err => console.error(err),
      () => console.log('done loading Accommodation')
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
