import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightContent2Component } from './light-content2.component';

describe('LightContent2Component', () => {
  let component: LightContent2Component;
  let fixture: ComponentFixture<LightContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightContent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
