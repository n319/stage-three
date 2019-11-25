import { TestBed } from '@angular/core/testing';

import { DynamicCrudService } from './dynamic-crud.service';

describe('DynamicCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicCrudService = TestBed.get(DynamicCrudService);
    expect(service).toBeTruthy();
  });
});
