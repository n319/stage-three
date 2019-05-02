import { TestBed } from './node_modules/@app/base/api/tests/node_modules/@angular/core/testingar/core/testingar/core/testing';

import { UserService } from '../user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
