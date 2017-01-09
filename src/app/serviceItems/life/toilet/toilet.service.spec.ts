/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToiletService } from './toilet.service';

describe('ToiletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToiletService]
    });
  });

  it('should ...', inject([ToiletService], (service: ToiletService) => {
    expect(service).toBeTruthy();
  }));
});
