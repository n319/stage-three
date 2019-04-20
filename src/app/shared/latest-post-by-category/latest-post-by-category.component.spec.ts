import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostByCategoryComponent } from './latest-post-by-category.component';

describe('LatestPostByCategoryComponent', () => {
  let component: LatestPostByCategoryComponent;
  let fixture: ComponentFixture<LatestPostByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
