import { Response, Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderService {

  constructor(private http: Http) { }

  getWeather() {
    return this.http.get(environment.sourceUrl + '/weather/warning').map((res: Response) => res.json());
  }
}
