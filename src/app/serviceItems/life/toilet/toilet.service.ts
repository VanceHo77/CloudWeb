import { URLSearchParams } from '@angular/http';
import { HistoryService } from './../../../core/history/history.Service';
import { RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/life/toilet?';

@Injectable()
export class ToiletService {

  constructor(private http: Http, private historyService: HistoryService) { }

  getStrongSkills(params: URLSearchParams) {

    // 變更Url
    this.historyService.pushState({ title: 'ToiletService', url: location.pathname + '?' + params.toString() });

    return this.http.get(SourceUrl, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }
}
