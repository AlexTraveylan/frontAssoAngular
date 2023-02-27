import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarrouselAccueilComponent } from './carrousel-accueil/carrousel-accueil.component';
import { CarrouselGouterComponent } from './carrousel-gouter/carrousel-gouter.component';
import { CarrouselTombolaComponent } from './carrousel-tombola/carrousel-tombola.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [
    CarrouselAccueilComponent,
    CarrouselComponent,
    CarrouselGouterComponent,
    CarrouselTombolaComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    CarrouselAccueilComponent,
    CarrouselComponent,
    CarrouselGouterComponent,
    CarrouselTombolaComponent,
  ],
})
export class PhotosCarousselModule {}
