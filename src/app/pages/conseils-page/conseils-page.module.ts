import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConseilCardComponent } from './components/conseil-card/conseil-card.component';
import { ConseilsPageRoutingModule } from './conseils-page-routing.module';
import { ConseilsComponent } from './conseils/conseils.component';

@NgModule({
  declarations: [ConseilCardComponent, ConseilsComponent],
  imports: [CommonModule, ConseilsPageRoutingModule, SharedModule],
})
export class ConseilsPageModule {}
