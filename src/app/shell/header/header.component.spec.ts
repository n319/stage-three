import { async, ComponentFixture, TestBed } from './node_modules/@app/base/shell/header/node_modules/@angular/core/testing';
import { NgbModule } from './node_modules/@app/base/shell/header/node_modules/@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from './node_modules/@app/base/shell/header/node_modules/@ngx-translate/core';
import { RouterTestingModule } from './node_modules/@app/base/shell/header/node_modules/@angular/router/testing';

import { AuthenticationService, I18nService, MockAuthenticationService } from './node_modules/@app/base/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgbModule, TranslateModule.forRoot()],
      declarations: [HeaderComponent],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }, I18nService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
