import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderbuttonsPageRoutingModule } from './headerbuttons-routing.module';

import { HeaderbuttonsPage } from './headerbuttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderbuttonsPageRoutingModule
  ],
  declarations: [HeaderbuttonsPage]
})
export class HeaderbuttonsPageModule {}
