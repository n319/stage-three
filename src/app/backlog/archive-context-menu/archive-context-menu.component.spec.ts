import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveContextMenuComponent } from './archive-context-menu.component';

describe('ArchiveContextMenuComponent', () => {
  let component: ArchiveContextMenuComponent;
  let fixture: ComponentFixture<ArchiveContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
