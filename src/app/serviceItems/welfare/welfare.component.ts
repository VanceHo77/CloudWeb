import { AppService } from './../../app.service';
import { welfareGroupComponents } from './welfare-group.component';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '',
    templateUrl: './welfare.component.html',
    styleUrls: []
})
export class WelfareComponent {

    serviceName: string;


    constructor() {
        this.serviceName = AppService.serviceItemName;
    }

}

