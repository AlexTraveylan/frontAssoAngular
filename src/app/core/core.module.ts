import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { LandingPageModule } from '../pages/landing-page/landing-page.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LandingPageModule,
    LandingPageModule,
  ],
})
export class CoreModule {}
