import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarrouselAccueilComponent } from './carrousel-accueil/carrousel-accueil.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [CarrouselAccueilComponent, CarrouselComponent],
  imports: [CommonModule, SharedModule],
  exports: [CarrouselAccueilComponent],
})
export class PhotosCarousselModule {}
