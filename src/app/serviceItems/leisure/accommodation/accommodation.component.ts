import { HistoryService } from './../../../core/history/history.Service';
import { AccommodationService } from './accommodation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  providers: [HistoryService, AccommodationService]
})
export class AccommodationComponent implements OnInit{
  sub;

  public jsonData: any;

  constructor(private accommodationService: AccommodationService) { }

  ngOnInit() {
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
