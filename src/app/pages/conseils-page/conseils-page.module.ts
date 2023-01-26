import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConseilCardComponent } from './components/conseil-card/conseil-card.component';
import { ConseilsPageRoutingModule } from './conseils-page-routing.module';
import { ConseilsComponent } from './conseils/conseils.component';

@NgModule({
  declarations: [ConseilCardComponent, ConseilsComponent],
  imports: [CommonModule, ConseilsPageRoutingModule],
})
export class ConseilsPageModule {}
