import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptaComponent } from './compta/compta.component';

const routes: Routes = [{ path: '', component: ComptaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptaPageRoutingModule {}
