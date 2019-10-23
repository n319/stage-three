import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDndComponent } from './list-dnd.component';

describe('ListDndComponent', () => {
  let component: ListDndComponent;
  let fixture: ComponentFixture<ListDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDndComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
