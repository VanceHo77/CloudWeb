import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class IndexService {

    private category: Array<string> = [];

    constructor(private http: Http) { }

    //Service-Highlights
    getServiceHighlights() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getHighlights').map((res: Response) => res.json());
    }
}
