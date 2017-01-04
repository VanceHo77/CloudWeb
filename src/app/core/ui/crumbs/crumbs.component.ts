import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './../../../app.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrls: ['./crumbs.component.css']
})
export class CrumbsComponent {
  constructor(public appService: AppService) { }
}
