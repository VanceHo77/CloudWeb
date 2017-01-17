import { SecondLayerComponent } from './../../core/template/second-layer.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { LeisureComponent } from './leisure.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const LeisureRoutes: Routes = [
  {
    path: 'leisure', component: SecondLayerComponent,
    children: [
      { path: '' },
      {
       path: 'accommodation', component: AccommodationComponent
      }
    ]
  }
];
