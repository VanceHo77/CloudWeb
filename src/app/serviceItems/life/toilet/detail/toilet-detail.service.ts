import { environment } from './../../../../../environments/environment';
import { URLSearchParams } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/life/toilet?';

@Injectable()
export class ToiletDetailService {

  constructor(private http: Http) { }

  getToiletDetail(params: URLSearchParams) {
    return this.http.get(SourceUrl, new RequestOptions({ search: params })).map((res: Response) => res.json());
  }
}
