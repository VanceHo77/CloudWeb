import { SecondLayerComponent } from './../../core/template/second-layer.component';
import { StrongSkillsDetailComponent } from './strong-skills/detail/strong-skills-detail.component';
import { StrongSkillsComponent } from './strong-skills/strong-skills.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';

export const WelfareRoutes: Routes = [
  {
    path: 'official', component: SecondLayerComponent,
    children: [
      { path: '' },
      {
        path: 'legalAdvice', component: LegalAdviceComponent
      }
    ]
  }, {
    path: 'welfare', component: SecondLayerComponent,
    children: [
      { path: '' },
      {
        path: 'strongSkills', component: StrongSkillsComponent
      },
      {
        path: 'strongSkills-detail', component: StrongSkillsDetailComponent
      }
    ]
  }
];
