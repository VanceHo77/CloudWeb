import { GooglemapComponent } from './template/googlemap.component';
import { DistrctMenuComponent } from './ui/distrct-menu/distrct-menu.component';
import { GoogleMapsImplComponent } from './ui/googlemap/googlemaps-impl.component';
import { SecondLayerComponent } from './template/second-layer.component';
import { AgmCoreModule } from './ui/googlemap/core/core-module';
import { PaginationModule } from './ui/pagination/pagination.module';
import { NgModule, Component } from '@angular/core';
import { CrumbsComponent } from './ui/crumbs/crumbs.component';
import { DropdownModule } from './ui/dropdown/dropdown.module';

/* Component */
export const COREGROUPCOMPONENT: Array<Component> =
    [CrumbsComponent, SecondLayerComponent, GoogleMapsImplComponent, DistrctMenuComponent, GooglemapComponent];

/* Module */
export const COREGROUPMODULES: Array<NgModule> = [
    DropdownModule,
    PaginationModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCyAL7I5s-dMnRdxRvO0TFvYW1gmKbMfT4' //google maps api key
    })
];