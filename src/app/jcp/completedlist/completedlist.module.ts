import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedlistPageRoutingModule } from './completedlist-routing.module';

import { CompletedlistPage } from './completedlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedlistPageRoutingModule
  ],
  declarations: [CompletedlistPage]
})
export class CompletedlistPageModule {}
