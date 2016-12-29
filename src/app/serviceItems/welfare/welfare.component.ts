import { HeaderWebmenuService } from './../../header/header-webmenu/header-webmenu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './welfare.component.html',
    styleUrls: [],
    providers: [HeaderWebmenuService]
})
export class WelfareComponent {
    serviceName: string;
    sub;

    constructor(private route: ActivatedRoute, private router: Router, public webmenuService: HeaderWebmenuService) { }

    ngOnInit() {
        this.sub = this.webmenuService.getWebMenus().subscribe(
            data => {
                var locationUrl = window.location.pathname;
                for (var i = 0; i < data.length; i++) {
                    if (locationUrl == data[i].uri) {
                        this.serviceName = data[i].title;
                    }
                }
            },
            err => console.error(err),
            () => console.log('done loading WebMenus')
        );
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
