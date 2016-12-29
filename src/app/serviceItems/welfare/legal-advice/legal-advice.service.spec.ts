/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LegalAdviceService } from './legal-advice.service';

describe('LegalAdviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegalAdviceService]
    });
  });

  it('should ...', inject([LegalAdviceService], (service: LegalAdviceService) => {
    expect(service).toBeTruthy();
  }));
});
