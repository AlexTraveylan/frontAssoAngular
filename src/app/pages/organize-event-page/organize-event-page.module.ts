import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { InformationsCardComponent } from './components/informations-card/informations-card.component';
import { PopUpCardComponent } from './components/pop-up-card/pop-up-card.component';
import { ToDoCardComponent } from './components/to-do-card/to-do-card.component';
import { ToDoCreateFormComponent } from './components/to-do-create-form/to-do-create-form.component';
import { OrganizeEventPageRoutingModule } from './organize-event-page-routing.module';
import { OrganizeEventComponent } from './organize-event/organize-event.component';

@NgModule({
  declarations: [
    ToDoCardComponent,
    InformationsCardComponent,
    PopUpCardComponent,
    OrganizeEventComponent,
    ToDoCreateFormComponent,
  ],
  imports: [
    CommonModule,
    OrganizeEventPageRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [InformationsCardComponent],
})
export class OrganizeEventPageModule {}
