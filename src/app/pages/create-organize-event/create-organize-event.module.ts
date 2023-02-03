import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizeEventPageModule } from '../organize-event-page/organize-event-page.module';

import { CreateFormComponent } from './create-form/create-form.component';
import { CreateOrganizeEventRoutingModule } from './create-organize-event-routing.module';

@NgModule({
  declarations: [CreateFormComponent],
  imports: [
    CommonModule,
    CreateOrganizeEventRoutingModule,
    ReactiveFormsModule,
    OrganizeEventPageModule,
    SharedModule,
  ],
})
export class CreateOrganizeEventModule {}
