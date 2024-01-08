import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedlistPage } from './completedlist.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedlistPage
  },
  {
    path: 'completeddetails',
    loadChildren: () => import('./completeddetails/completeddetails.module').then( m => m.CompleteddetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedlistPageRoutingModule {}
