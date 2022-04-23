import { TestBed } from '@angular/core/testing';

import { FAndQService } from './f-and-q.service';

describe('FAndQService', () => {
  let service: FAndQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FAndQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
