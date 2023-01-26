import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizeEventComponent } from './organize-event/organize-event.component';

const routes: Routes = [{ path: '', component: OrganizeEventComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizeEventPageRoutingModule {}
