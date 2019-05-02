import { TestBed } from './node_modules/@app/base/api/tests/node_modules/@angular/core/testingar/core/testingar/core/testing';

import { ProjectService } from '../project.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
