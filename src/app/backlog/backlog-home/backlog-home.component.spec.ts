import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogHomeComponent } from './backlog-home.component';

describe('BacklogHomeComponent', () => {
  let component: BacklogHomeComponent;
  let fixture: ComponentFixture<BacklogHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BacklogHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
