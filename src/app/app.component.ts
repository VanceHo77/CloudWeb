import { AppService } from './app.service';
import { DropdownObject } from './core/ui/dropdown/dropdown-object';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public allServiceHighLights: Array<DropdownObject>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getServiceHighLights();
  }

  getServiceHighLights() {
    this.allServiceHighLights = this.appService.getServiceHighlights();
  }
}
