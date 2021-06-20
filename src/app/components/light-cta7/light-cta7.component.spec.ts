import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCta7Component } from './light-cta7.component';

describe('LightCta7Component', () => {
  let component: LightCta7Component;
  let fixture: ComponentFixture<LightCta7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightCta7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
