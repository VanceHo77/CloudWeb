import { AppService } from './../../../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent {

  constructor(public appService: AppService) { }

  removeThrLayer(event: Event) {
    event.preventDefault();
    let thr = document.getElementById("crumbsThrLayer");
    if (thr != null) thr.remove();
  }
}
