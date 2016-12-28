import { HeaderWebmenuService } from './header-webmenu/header-webmenu.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [HeaderWebmenuService]
})
export class HeaderComponent {
 
}
