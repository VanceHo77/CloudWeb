import { ToiletDetailComponent } from './toilet/detail/toilet-detail.component';
import { LifeComponent } from './life.component';
import { ToiletComponent } from './toilet/toilet.component';

const Toilet = [ToiletComponent,ToiletDetailComponent];

export const LIFE_GROUP: Array<any> = [LifeComponent, Toilet];
