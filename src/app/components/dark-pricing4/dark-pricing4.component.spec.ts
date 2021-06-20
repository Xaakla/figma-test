import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkPricing4Component } from './dark-pricing4.component';

describe('DarkPricing4Component', () => {
  let component: DarkPricing4Component;
  let fixture: ComponentFixture<DarkPricing4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkPricing4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkPricing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
