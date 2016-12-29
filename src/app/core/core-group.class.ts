import { PaginationModule } from './ui/pagination/pagination.module';
import { NgModule, Component } from '@angular/core';
import { CrumbsComponent } from './ui/crumbs/crumbs.component';
import { DropdownModule } from './ui/dropdown/dropdown.module';

/* Component */
export const COREGROUPCOMPONENT: Array<Component> = [CrumbsComponent];

/* Module */
export const COREGROUPMODULES: Array<NgModule> = [DropdownModule,PaginationModule];