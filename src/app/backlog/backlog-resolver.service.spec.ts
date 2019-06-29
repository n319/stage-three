import { TestBed } from '@angular/core/testing';

import { BacklogResolverService } from './backlog-resolver.service';

describe('BacklogResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacklogResolverService = TestBed.get(BacklogResolverService);
    expect(service).toBeTruthy();
  });
});
