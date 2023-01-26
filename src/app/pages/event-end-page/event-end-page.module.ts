import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventComponent } from './components/event-card/event.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventEndPageRoutingModule } from './event-end-page-routing.module';
import { HistoriquePageComponent } from './historique-page/historique-page.component';

@NgModule({
  declarations: [HistoriquePageComponent, EventComponent, EventListComponent],
  imports: [CommonModule, EventEndPageRoutingModule],
})
export class EventEndPageModule {}
