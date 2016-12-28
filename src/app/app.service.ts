import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
    public static serviceItemName: string;

    setServiceItemName(sname: string) {
        AppService.serviceItemName = sname;
    }

    getServiceItemName() {
        return AppService.serviceItemName;
    }
}