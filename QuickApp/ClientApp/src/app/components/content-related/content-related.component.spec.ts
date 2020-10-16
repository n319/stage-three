import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRelatedComponent } from './content-related.component';

describe('ContentRelatedComponent', () => {
  let component: ContentRelatedComponent;
  let fixture: ComponentFixture<ContentRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
