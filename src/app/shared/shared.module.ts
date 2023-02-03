import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { IosButtonComponent } from './ios-button/ios-button.component';
import { ShortenPipe } from './pipes/pourcent.pipe';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';

@NgModule({
  declarations: [
    ShortenPipe,
    BtnComponent,
    IconComponent,
    IosButtonComponent,
    ProgressCircleComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    ShortenPipe,
    BtnComponent,
    IconComponent,
    IosButtonComponent,
    ProgressCircleComponent,
  ],
})
export class SharedModule {}
