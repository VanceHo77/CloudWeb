import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderWebmenuService {

    constructor(private http: Http) { }

    getWebMenus() {
        return this.http.get('http://localhost:8080/Cloud-io/ServiceItems/getWebMenu').map((res: Response) => res.json());
    }
}
