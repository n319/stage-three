import { TestBed } from './node_modules/@app/base/api/tests/node_modules/@angular/core/testingar/core/testingar/core/testing';

import { KanbanService } from '../kanban.service';

describe('KanbanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KanbanService = TestBed.get(KanbanService);
    expect(service).toBeTruthy();
  });
});
