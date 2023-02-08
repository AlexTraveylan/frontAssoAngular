import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { BilanComponent } from './components/bilan/bilan.component';
import { ComptaCardComponent } from './components/compta-card/compta-card.component';
import { CreateComptaFormComponent } from './components/create-compta-form/create-compta-form.component';
import { ComptaPageRoutingModule } from './compta-page-routing.module';
import { ComptaComponent } from './compta/compta.component';

@NgModule({
  declarations: [
    ComptaCardComponent,
    ComptaComponent,
    BilanComponent,
    CreateComptaFormComponent,
  ],
  imports: [
    CommonModule,
    ComptaPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ComptaPageModule {}
