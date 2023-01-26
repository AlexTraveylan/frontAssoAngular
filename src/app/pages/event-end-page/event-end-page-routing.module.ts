import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriquePageComponent } from './historique-page/historique-page.component';

const routes: Routes = [{ path: '', component: HistoriquePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventEndPageRoutingModule {}
