import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  sub;
  public serviceName: string;
  public serviceUrl: string;
  public itemName: string;
  public static districts: Array<string> = [];

  constructor(private http: Http) {
    if (AppService.districts.length == 0) {
      this.getDistricts();
    }
  }

  getDistricts() {
    this.sub = this.http.get(environment.sourceUrl + '/common/getDistricts').map((res: Response) => res.json()).subscribe(
      data => {
        AppService.districts = data;
      },
      err => console.error(err),
      () => console.log('done loading districts')
    );
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

}
