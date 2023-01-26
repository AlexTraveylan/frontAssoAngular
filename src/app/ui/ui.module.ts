import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { Ui1Component } from './ui1/ui1.component';

@NgModule({
  declarations: [Ui1Component],
  imports: [CommonModule, CoreModule, AppRoutingModule],
  exports: [Ui1Component],
})
export class UiModule {}
