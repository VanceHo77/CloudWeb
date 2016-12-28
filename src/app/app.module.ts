import { WelfareComponent } from './serviceItems/welfare/welfare.component';
import { welfareGroupComponents } from './serviceItems/welfare/welfare-group.component';
import { HeaderWebmenuComponent } from './header/header-webmenu/header-webmenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreGroupClass } from './core/core-group.class';
import { DropdownModule } from './core/ui/dropdown/dropdown.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './serviceItems/welfare/legal-advice/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreGroupClass.coreGroupComponents,
    HeaderComponent,
    HeaderWebmenuComponent,
    FooterComponent,
    IndexComponent,
    welfareGroupComponents,
    DetailComponent,
    WelfareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Core
    CoreGroupClass.coreGroupModules,
    // Router
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
