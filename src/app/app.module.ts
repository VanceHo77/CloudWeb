import { coreGroupModules } from './core/core-group.module';
import { DropdownModule } from './core/ui/dropdown/dropdown.module';
import { coreGroupComponents } from './core/core-group.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    coreGroupComponents
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
