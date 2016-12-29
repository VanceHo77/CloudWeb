import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelfareComponent } from './welfare.component';

import { LegalAdviceComponent } from './legal-advice/legal-advice.component';

export const WelfareRoutes: Routes = [
  {
    path: 'official', component: WelfareComponent,
    children: [
      { path: '' },
      {
        path: 'legalAdvice', component: LegalAdviceComponent
      }
    ]
  }
];
