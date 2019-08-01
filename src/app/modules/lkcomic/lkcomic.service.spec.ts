import { TestBed } from '@angular/core/testing';

import { LkcomicService } from './lkcomic.service';

describe('LkcomicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LkcomicService = TestBed.get(LkcomicService);
    expect(service).toBeTruthy();
  });
});
