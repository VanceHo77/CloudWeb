import { welfareGroupComponents } from './welfare-group.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './welfare.component.html',
    styleUrls: []
})
export class WelfareComponent {
    serviceName: string;
    sub;

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            this.serviceName = params['sname'];
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
