import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedlistPageRoutingModule } from './rejectedlist-routing.module';

import { RejectedlistPage } from './rejectedlist.page';
import{HeaderbuttonsModule} from 'src/app/shared/headerbuttons/headerbuttons.module'
import{FotterbuttonsModule} from 'src/app/shared/fotterbuttons/fotterbuttons.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedlistPageRoutingModule,
    HeaderbuttonsModule,
    FotterbuttonsModule
  ],
  declarations: [RejectedlistPage]
})
export class RejectedlistPageModule {}
