import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent {

  serviceName: string;

  constructor(public appService: AppService) {}

}
