import { LEISURE_GROUP } from './serviceItems/leisure/leisure-group.class';
import { LIFE_GROUP } from './serviceItems/life/life-group.class';
import { WELFARE_GROUP } from './serviceItems/welfare/welfare-group.class';
import { HeaderWebmenuComponent } from './header/header-webmenu/header-webmenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { COREGROUPCOMPONENT,COREGROUPMODULES } from './core/core-group.class';
import { DropdownModule } from './core/ui/dropdown/dropdown.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    // index
    HeaderComponent,
    HeaderWebmenuComponent,
    FooterComponent,
    IndexComponent,
    // Core
    COREGROUPCOMPONENT,
    // ServiceItems
    WELFARE_GROUP,
    LIFE_GROUP,
    LEISURE_GROUP
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Core
    COREGROUPMODULES,
    // Router
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
