import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCardSummaryComponent } from './archive-card-summary.component';

describe('ArchiveCardSummaryComponent', () => {
  let component: ArchiveCardSummaryComponent;
  let fixture: ComponentFixture<ArchiveCardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveCardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
