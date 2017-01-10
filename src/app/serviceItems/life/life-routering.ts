import { ToiletDetailComponent } from './toilet/detail/toilet-detail.component';
import { LifeComponent } from './life.component';
import { ToiletComponent } from './toilet/toilet.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const LifeRoutes: Routes = [
  {
    path: 'life', component: LifeComponent,
    children: [
      { path: '' },
      {
        path: 'toilet', component: ToiletComponent
      },
      {
        path: 'toilet-detail', component: ToiletDetailComponent
      }
    ]
  }
];
