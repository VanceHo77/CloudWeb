import { Injectable } from '@angular/core';
export interface History {
    title: string;
    url: string;
}

@Injectable()
export class HistoryService {
    pushState(obj: History) {
        history.pushState(obj, obj.title, obj.url);
    }
}