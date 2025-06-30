import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPackages } from './pay-packages';

describe('PayPackages', () => {
  let component: PayPackages;
  let fixture: ComponentFixture<PayPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
