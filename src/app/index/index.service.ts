import { environment } from './../../environments/environment';
import { DropdownObject } from './../core/ui/dropdown/dropdown-object';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class IndexService {

    private category: Array<string> = [];
    private allServiceHighLightData: Array<DropdownObject> = [];

    constructor(private http: Http) { }

    //Service-Highlights
    getServiceHighlights() {
        return this.getData(this.allServiceHighLightData, '/ServiceItems/getHighlights');
    }


    private getData(dataObj, apiUrl: string) {
        var sourceUrl = environment.sourceUrl + apiUrl;
        this.http.get(sourceUrl).map((res: Response) => res.text()).subscribe(
            data => {
                var category, title, uri, imgUrl;
                var json = JSON.parse(data);
                for (var i = 0; i < json.length; i++) {
                    category = json[i].category;
                    title = json[i].title;
                    uri = json[i].uri;
                    imgUrl = json[i].imgUrl;
                    dataObj.push(new DropdownObject(category, title, uri, imgUrl));
                    console.log(dataObj)
                }
            },
            err => console.error(err),
            () => console.log('done loading ' + sourceUrl + '.')
        );
        return dataObj;
    }
}
