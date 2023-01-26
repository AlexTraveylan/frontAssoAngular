import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LinksComponent } from './components/links/links.component';
import { MembersCardComponent } from './components/members-card/members-card.component';

@NgModule({
  declarations: [
    MembersCardComponent,
    ContactFormComponent,
    LinksComponent,
    AboutComponent,
  ],
  imports: [CommonModule, AboutPageRoutingModule, FormsModule, SharedModule],
})
export class AboutPageModule {}
