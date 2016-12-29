import { WelfareComponent } from './welfare.component';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';

const LegalAdviceComponents: Array<any> = [LegalAdviceComponent];

export class WelfareGroupClass {
    static welfareGroupComponents = [WelfareComponent, LegalAdviceComponents];
}