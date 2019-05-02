import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanLaneComponent } from './kanban-lane.component';

describe('KanbanLaneComponent', () => {
  let component: KanbanLaneComponent;
  let fixture: ComponentFixture<KanbanLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
