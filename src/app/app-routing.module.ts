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
    path: 'index',component:IndexComponent
  },
  {
    path: 'official',
    children: [
      { path: '' },//空path必要
      { path: 'legalAdvice', component: LegalAdviceComponent}
    ]
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
