import { async, ComponentFixture, TestBed } from './node_modules/@app/base/theme/agile-house-icon/node_modules/@angular/core/testingar/core/testing';

import { AgileHouseIconComponent } from './agile-house-icon.component';

describe('AgileHouseIconComponent', () => {
  let component: AgileHouseIconComponent;
  let fixture: ComponentFixture<AgileHouseIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgileHouseIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgileHouseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
