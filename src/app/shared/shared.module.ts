import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavOptionsComponent } from './nav-options/nav-options.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [ButtonComponent, NavOptionsComponent, LogoComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, NavOptionsComponent, LogoComponent],
})
export class SharedModule {}
