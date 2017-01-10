import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/life/toilet?';

const Source_Villages_Url: string = environment.sourceUrl + '/life/toilet/getVillage?';

@Injectable()
export class ToiletService {

  constructor(private http: Http, private historyService: HistoryService) { }

  getToilet(params: URLSearchParams) {

    // 變更Url
    this.historyService.pushState({ title: 'ToiletService', url: location.pathname + '?' + params.toString() });

    return this.http.get(SourceUrl, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }

  getVillages(params: URLSearchParams) {
    return this.http.get(Source_Villages_Url, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }
}
