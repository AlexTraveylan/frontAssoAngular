import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { ShortenPipe } from './pipes/pourcent.pipe';

@NgModule({
  declarations: [ShortenPipe, BtnComponent, IconComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ShortenPipe, BtnComponent, IconComponent],
})
export class SharedModule {}
