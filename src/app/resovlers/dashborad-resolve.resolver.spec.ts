import { TestBed } from '@angular/core/testing';

import { DashboradResolveResolver } from './dashborad-resolve.resolver';

describe('DashboradResolveResolver', () => {
  let resolver: DashboradResolveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboradResolveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
