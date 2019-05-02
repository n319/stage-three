import { TestBed } from './node_modules/@app/base/api/tests/node_modules/@angular/core/testingar/core/testingar/core/testing';

import { PostService } from '../post.service';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
