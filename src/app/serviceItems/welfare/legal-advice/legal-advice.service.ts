import { URLSearchParams, RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/official/legalAdvice?';

@Injectable()
export class LegalAdviceService {

  constructor(private http: Http) { }

  getLegalAdvice(pageNum: number) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', pageNum.toString());
     //變更Url
    var obj = { Title: 'LegalAdviceService', Url: location.pathname + '?' + params.toString() };
    history.pushState(obj, obj.Title, obj.Url);

    return this.http.get(SourceUrl, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }
}
