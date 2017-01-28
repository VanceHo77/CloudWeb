import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/leisure/accommodation?';

@Injectable()
export class AccommodationService {

  constructor(private http: Http, private historyService: HistoryService) { }

  getAccommodation() {

    // 變更Url
    this.historyService.pushState({ title: 'AccommodationService', url: location.pathname });

    return this.http.get(SourceUrl, new RequestOptions()).map((res: Response) => res.json());
  }

}
