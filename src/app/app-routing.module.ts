import { LifeRoutes } from './serviceItems/life/life-routering';
import { WelfareRoutes } from './serviceItems/welfare/welfare-routering';
import { LegalAdviceComponent } from './serviceItems/welfare/legal-advice/legal-advice.component';
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  },
  {
    path: 'index', component: IndexComponent
  },
  ...WelfareRoutes,
  ...LifeRoutes,
  {
    path: '**', redirectTo: '/index', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
