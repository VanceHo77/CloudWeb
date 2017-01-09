import { AppService } from './../../app.service';
import { HeaderWebmenuService } from './../../header/header-webmenu/header-webmenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './life.component.html',
    styleUrls: [],
    providers: [HeaderWebmenuService, AppService]
})
export class LifeComponent {
    serviceName: string;
    sub;

    constructor(
        private router: Router,
        public webmenuService: HeaderWebmenuService,
        public appService: AppService) { }

    ngOnInit() {
        this.sub = this.webmenuService.getWebMenus().subscribe(
            data => {
                var locationUrl = window.location.pathname;
                for (var i = 0; i < data.length; i++) {
                    if (locationUrl.indexOf(data[i].uri) >= 0) {
                        this.serviceName = data[i].title;
                        this.appService.serviceName = this.serviceName;
                        this.appService.serviceUrl = locationUrl.replace('-detail', '');
                    }
                }
            },
            err => console.error(err),
            () => console.log('done search ServiceName')
        );
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
