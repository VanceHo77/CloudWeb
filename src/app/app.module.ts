import { HeaderWebmenuComponent } from './header/header-webmenu/header-webmenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { coreGroupModules } from './core/core-group.module';
import { DropdownModule } from './core/ui/dropdown/dropdown.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { LegalAdviceComponent } from './serviceItems/welfare/legal-advice/legal-advice.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderWebmenuComponent,
    FooterComponent,
    IndexComponent,
    LegalAdviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    coreGroupModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
