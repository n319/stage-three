import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinboardCreateMenuComponent } from './pinboard-create-menu.component';

describe('PinboardCreateMenuComponent', () => {
  let component: PinboardCreateMenuComponent;
  let fixture: ComponentFixture<PinboardCreateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinboardCreateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinboardCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
