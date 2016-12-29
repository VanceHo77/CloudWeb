import { environment } from './../../../../environments/environment';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

const SourceUrl: string = environment.sourceUrl + '/official/legalAdvice';

@Injectable()
export class LegalAdviceService {

  constructor(private http: Http) { }

  getLegalAdvice() {
    return this.http.get(SourceUrl).map((res: Response) => res.json());
  }
}
