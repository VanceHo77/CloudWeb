import { CrumbsComponent } from './ui/crumbs/crumbs.component';
import { DropdownModule } from './ui/dropdown/dropdown.module';

/* Component */
const CRUMBS: Array<any> = [CrumbsComponent];

/* Module */
const UI: Array<any> = [DropdownModule];


export class CoreGroupClass {

    /* Component */
    static coreGroupComponents = CRUMBS;

    /* Module */
    static coreGroupModules = UI;
} 