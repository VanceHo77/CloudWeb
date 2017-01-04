import { StrongSkillsDetailComponent } from './strong-skills/detail/strong-skills-detail.component';
import { StrongSkillsComponent } from './strong-skills/strong-skills.component';
import { WelfareComponent } from './welfare.component';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';

const StrongSkills = [StrongSkillsComponent, StrongSkillsDetailComponent];

export const WELFAREGROUP: Array<any> = [WelfareComponent, LegalAdviceComponent, StrongSkills];
