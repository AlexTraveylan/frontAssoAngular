import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GouterParticipatifComponent } from './gouter-participatif/gouter-participatif.component';
import { TombolaComponent } from './tombola/tombola.component';

const routes: Routes = [
  { path: 'gouter-participatif', component: GouterParticipatifComponent },
  { path: 'tombola', component: TombolaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEventRoutingModule {}
