import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDndComponent } from './nested-dnd.component';

describe('NestedDndComponent', () => {
  let component: NestedDndComponent;
  let fixture: ComponentFixture<NestedDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NestedDndComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
