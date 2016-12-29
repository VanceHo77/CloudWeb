import { AppService } from './../../app.service';
import { WebMenu } from './../../shared/webmenu.class.';
import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HeaderWebmenuService {

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    private category: Array<string> = [];
    private allServiceData: Array<WebMenu> = [];
    private mostClickData: Array<WebMenu> = [];
    private lastModifyData: Array<WebMenu> = [];
    private recommondData: Array<WebMenu> = [];



    constructor(private http: Http) { }

    //服務總覽
    getWebMenus() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getNavbarMenu').map((res: Response) => res.json());
    }

    //熱門服務
    getMostClickServiceMenus() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getPopServiceMenu').map((res: Response) => res.json());
    }

    //最新服務
    getLastModifyServiceMenus() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getNewServiceMenu').map((res: Response) => res.json());
    }

    //推薦服務
    getRecommondServiceMenus() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getRecommandMenu').map((res: Response) => res.json());
    }

    //服務總覽分類
    getCategory() {
        return this.http.get(environment.sourceUrl + '/ServiceItems/getCategory').map((res: Response) => res.json());
    }

    //Dropdown Event
    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
