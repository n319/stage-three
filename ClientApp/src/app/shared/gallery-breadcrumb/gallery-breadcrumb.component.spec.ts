import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBreadcrumbComponent } from './gallery-breadcrumb.component';

describe('GalleryBreadcrumbComponent', () => {
  let component: GalleryBreadcrumbComponent;
  let fixture: ComponentFixture<GalleryBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryBreadcrumbComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
