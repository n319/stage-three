import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNoteComponent } from './link-note.component';

describe('LinkNoteComponent', () => {
  let component: LinkNoteComponent;
  let fixture: ComponentFixture<LinkNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
