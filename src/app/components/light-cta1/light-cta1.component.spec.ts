import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCTA1Component } from './light-cta1.component';

describe('LightCTA1Component', () => {
  let component: LightCTA1Component;
  let fixture: ComponentFixture<LightCTA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightCTA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCTA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
