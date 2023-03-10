import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JoinusPageRoutingModule } from './joinus-page-routing.module';
import { JoinUsComponent } from './join-us/join-us.component';

@NgModule({
  declarations: [
    JoinUsComponent
  ],
  imports: [CommonModule, JoinusPageRoutingModule],
})
export class JoinusPageModule {}
