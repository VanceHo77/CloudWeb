import { InfoWindowManager } from './../googlemap/core/services/managers/info-window-manager';
import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/leisure/lnglat/';

@Injectable()
export class NearMenuService {

  constructor(private http: Http) { }

  getNearInfo() {
    if (InfoWindowManager.Lng == '' || InfoWindowManager.Lat == '') {
      return Observable.empty<Response>();
    } else {
      return this.http.get(SourceUrl + InfoWindowManager.Lng + '/' + InfoWindowManager.Lat + '/poi', new RequestOptions()).map((res: Response) => res.json());
    }
  }

}
