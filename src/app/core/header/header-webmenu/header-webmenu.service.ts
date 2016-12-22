import { DropdownObject } from './../../ui/dropdown/dropdown-object';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderWebmenuService {

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    jsonData: any;
    droupDownMenu: DropdownObject;
    allServiceData: Array<DropdownObject> = [];
    mostClickData: Array<DropdownObject> = [];
    lastModifyData: Array<DropdownObject> = [];
    recommondData: Array<DropdownObject> = [];


    constructor(private http: Http) { }

    //服務總覽
    getWebMenus() {
        return this.getData(this.allServiceData, '/ServiceItems/getNavbarMenu');
    }

    //熱門服務
    getMostClickServiceMenus() {
        return this.getData(this.mostClickData, '/ServiceItems/getPopServiceMenu');
    }

    //最新服務
    getLastModifyServiceMenus() {
        return this.getData(this.lastModifyData, '/ServiceItems/getNewServiceMenu');
    }

    //推薦服務
    getRecommondServiceMenus() {
        return this.getData(this.recommondData, '/ServiceItems/getRecommandMenu');
    }

    private getData(dataObj: any, apiUrl: string) {
        var sourceUrl = environment.sourceUrl + apiUrl;
        this.jsonData = this.http.get(sourceUrl).map((res: Response) => res.json());
        this.jsonData.subscribe(
            data => {
                var category, title, uri;
                for (var i = 0; i < data.length; i++) {
                    category = data[i].category;
                    title = data[i].title;
                    uri = data[i].label;
                    dataObj.push(new DropdownObject(category, title, uri));
                }
            },
            err => console.error(err),
            () => console.log('done loading ' + sourceUrl + '.')
        );
        return dataObj;
    }


    //Dropdown Event
    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
