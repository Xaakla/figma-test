import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightContent56Component } from './light-content56.component';

describe('LightContent56Component', () => {
  let component: LightContent56Component;
  let fixture: ComponentFixture<LightContent56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightContent56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightContent56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
