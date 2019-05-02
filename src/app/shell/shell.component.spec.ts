import { async, ComponentFixture, TestBed } from '@app/base/shell/node_modules/@angular/core/testing';
import { RouterTestingModule } from '@app/base/shell/node_modules/@angular/router/testing';
import { TranslateModule } from '@app/base/shell/node_modules/@ngx-translate/core';
import { NgbModule } from '@app/base/shell/node_modules/@ng-bootstrap/ng-bootstrap';

import { AuthenticationService, CoreModule, MockAuthenticationService } from '@app/base/core';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), NgbModule, CoreModule],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }],
      declarations: [HeaderComponent, ShellComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
