import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LightCTA1Component } from './components/light-cta1/light-cta1.component';
import { LightCta7Component } from './components/light-cta7/light-cta7.component';
import { LightTestimonial1Component } from './components/light-testimonial1/light-testimonial1.component';
import { DarkPricing4Component } from './components/dark-pricing4/dark-pricing4.component';
import { LightContent2Component } from './components/light-content2/light-content2.component';
import { LightFooter1Component } from './components/light-footer1/light-footer1.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SharedModule} from "./shared/shared.module";
import { LightContent56Component } from './components/light-content56/light-content56.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LightCTA1Component,
    LightCta7Component,
    LightTestimonial1Component,
    DarkPricing4Component,
    LightContent2Component,
    LightFooter1Component,
    NavbarComponent,
    LightContent56Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: Screen, useValue: screen }],
  bootstrap: [AppComponent]
})
export class AppModule { }
