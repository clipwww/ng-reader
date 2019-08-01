import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
    data: {
      hasBackIcon: false,
      pageTitle: 'List'
    }
  },
  {
    path: ':id',
    component: DetailsComponent,
    data: {
      hasBackIcon: true,
      pageTitle: 'Details'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LkcomicRoutingModule { }
