import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightFooter1Component } from './light-footer1.component';

describe('LightFooter1Component', () => {
  let component: LightFooter1Component;
  let fixture: ComponentFixture<LightFooter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightFooter1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightFooter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
