import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTestimonial1Component } from './light-testimonial1.component';

describe('LightTestimonial1Component', () => {
  let component: LightTestimonial1Component;
  let fixture: ComponentFixture<LightTestimonial1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightTestimonial1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightTestimonial1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
