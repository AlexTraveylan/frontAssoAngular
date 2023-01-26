import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConseilsComponent } from './conseils/conseils.component';

const routes: Routes = [{ path: '', component: ConseilsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConseilsPageRoutingModule {}
