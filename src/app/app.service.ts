import { environment } from './../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  sub;
  public serviceName: string;
  public serviceUrl: string;
  public itemName: string;
  public districts: Array<String> = [];

  constructor(private http: Http) {
    this.getDistricts();
  }

  getDistricts() {
    this.sub = this.http.get(environment.sourceUrl + '/common/getDistricts').map((res: Response) => res.json()).subscribe(
      data => {
        this.districts = data;
        console.log(this.districts);
      },
      err => console.error(err),
      () => console.log('done loading districts')
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
