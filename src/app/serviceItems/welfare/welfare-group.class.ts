import { WelfareComponent } from './welfare.component';
import { DetailComponent } from './legal-advice/detail/detail.component';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';

const LegalAdviceComponents: Array<any> = [LegalAdviceComponent, DetailComponent];

export class WelfareGroupClass {
    static welfareGroupComponents = [WelfareComponent, LegalAdviceComponents];
}