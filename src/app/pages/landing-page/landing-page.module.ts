import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosCarousselModule } from '../../photos-caroussel/photos-caroussel.module';
import { HomeComponent } from './home/home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LandingPageRoutingModule, PhotosCarousselModule],
  exports: [HomeComponent],
})
export class LandingPageModule {}
