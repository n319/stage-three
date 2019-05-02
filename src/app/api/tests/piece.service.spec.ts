import { TestBed } from './node_modules/@app/base/api/tests/node_modules/@angular/core/testingar/core/testingar/core/testing';

import { PieceService } from '../piece.service';

describe('PieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieceService = TestBed.get(PieceService);
    expect(service).toBeTruthy();
  });
});
