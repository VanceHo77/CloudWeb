import { HeaderWebmenuService } from './core/header/header-webmenu/header-webmenu.service';
import { coreGroupComponents } from './core/core-group.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './core/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './core/header/header.component';
import { NgModule } from '@angular/core';
import { HeaderWebmenuComponent } from './core/header/header-webmenu/header-webmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    coreGroupComponents,
    HeaderWebmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
