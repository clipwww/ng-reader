import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LkcomicRoutingModule } from './lkcomic-routing.module';
import { ListComponent } from './pages/list/list.component';
import { NgZorroModule } from '../../@common/ng-zorro/ng-zorro.module';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    NgZorroModule,
    LkcomicRoutingModule,
  ]
})
export class LkcomicModule { }
