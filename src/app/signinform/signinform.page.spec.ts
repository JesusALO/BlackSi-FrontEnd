import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninformPage } from './signinform.page';

describe('SigninformPage', () => {
  let component: SigninformPage;
  let fixture: ComponentFixture<SigninformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
