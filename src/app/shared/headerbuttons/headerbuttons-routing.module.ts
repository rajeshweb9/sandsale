import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderbuttonsPage } from './headerbuttons.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderbuttonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderbuttonsPageRoutingModule {}
