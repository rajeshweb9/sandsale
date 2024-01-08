import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedlistPageRoutingModule } from './rejectedlist-routing.module';

import { RejectedlistPage } from './rejectedlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedlistPageRoutingModule
  ],
  declarations: [RejectedlistPage]
})
export class RejectedlistPageModule {}
