import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarrouselAccueilComponent } from './carrousel-accueil/carrousel-accueil.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [CarrouselAccueilComponent, CarrouselComponent],
  imports: [CommonModule],
  exports: [CarrouselAccueilComponent],
})
export class PhotosCarousselModule {}
