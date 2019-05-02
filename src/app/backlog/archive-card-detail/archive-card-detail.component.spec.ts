import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCardDetailComponent } from './archive-card-detail.component';

describe('ArchiveCardDetailComponent', () => {
  let component: ArchiveCardDetailComponent;
  let fixture: ComponentFixture<ArchiveCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
