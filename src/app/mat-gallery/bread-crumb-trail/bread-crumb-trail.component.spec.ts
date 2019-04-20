import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbTrailComponent } from './bread-crumb-trail.component';

describe('BreadCrumbTrailComponent', () => {
  let component: BreadCrumbTrailComponent;
  let fixture: ComponentFixture<BreadCrumbTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbTrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
