import { HistoryService } from './../../../core/history/history.Service';
import { URLSearchParams, RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/official/legalAdvice?';

@Injectable()
export class LegalAdviceService {

  constructor(private http: Http, private historyService: HistoryService) { }

  getLegalAdvice(pageNum: number) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', pageNum.toString());
    //變更Url
    this.historyService.pushState({ title: 'LegalAdviceService', url: location.pathname + '?' + params.toString() });

    return this.http.get(SourceUrl, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }
}
