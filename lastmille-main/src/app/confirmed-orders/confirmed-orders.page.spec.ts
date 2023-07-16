import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmedOrdersPage } from './confirmed-orders.page';

describe('ConfirmedOrdersPage', () => {
  let component: ConfirmedOrdersPage;
  let fixture: ComponentFixture<ConfirmedOrdersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmedOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
