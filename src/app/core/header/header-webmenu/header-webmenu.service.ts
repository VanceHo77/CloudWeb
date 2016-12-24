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

    private droupDownMenu: DropdownObject;
    private category: Array<string> = [];
    private allServiceData: Array<DropdownObject> = [];
    private mostClickData: Array<DropdownObject> = [];
    private lastModifyData: Array<DropdownObject> = [];
    private recommondData: Array<DropdownObject> = [];



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

    //服務總覽分類
    getCategory() {
        return this.getCategoryData(this.category, '/ServiceItems/getCategory');
    }


    private getData(dataObj, apiUrl: string) {
        var sourceUrl = environment.sourceUrl + apiUrl;
        this.http.get(sourceUrl).map((res: Response) => res.text()).subscribe(
            data => {
                var category, title, uri;
                var json = JSON.parse(data);
                for (var i = 0; i < json.length; i++) {
                    category = json[i].category;
                    title = json[i].title;
                    uri = json[i].uri;
                    dataObj.push(new DropdownObject(category, title, uri));
                }
            },
            err => console.error(err),
            () => console.log('done loading ' + sourceUrl + '.')
        );
        return dataObj;
    }

    private getCategoryData(dataObj, apiUrl: string) {
        var sourceUrl = environment.sourceUrl + apiUrl;
        this.http.get(sourceUrl).map((res: Response) => res.text()).subscribe(
            data => {
                var json = JSON.parse(data);
                for (var i = 0; i < json.length; i++) {
                    dataObj.push(json[i]);
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
