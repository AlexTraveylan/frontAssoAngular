import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsEventRoutingModule } from './details-event-routing.module';
import { GouterParticipatifComponent } from './gouter-participatif/gouter-participatif.component';
import { TombolaComponent } from './tombola/tombola.component';
import { PhotosCarousselModule } from 'src/app/photos-caroussel/photos-caroussel.module';

@NgModule({
  declarations: [GouterParticipatifComponent, TombolaComponent],
  imports: [CommonModule, DetailsEventRoutingModule, PhotosCarousselModule],
})
export class DetailsEventModule {}
