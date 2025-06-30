import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideButtons } from './side-buttons';

describe('SideButtons', () => {
  let component: SideButtons;
  let fixture: ComponentFixture<SideButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
