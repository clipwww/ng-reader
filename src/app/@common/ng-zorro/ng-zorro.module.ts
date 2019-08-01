import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NZ_I18N,
  zh_TW,

  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzPageHeaderModule,
  NzNotificationModule,
  NzListModule,
  NzSkeletonModule,
  NzPaginationModule,
  NzEmptyModule,

  NzSiderComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzContentComponent,
  NzFooterComponent,
  NzPageHeaderComponent,
  NzListComponent,
  NzListItemComponent,
  NzSkeletonComponent,
  NzPaginationComponent,
  NzEmptyComponent,

  NzMenuDirective,
  NzMenuItemDirective,
  NzIconDirective,
  NzPageHeaderContentDirective,

} from 'ng-zorro-antd';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzPageHeaderModule,
    NzNotificationModule,
    NzListModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzEmptyModule
  ],
  exports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzSiderComponent,
    NzPageHeaderComponent,
    NzListComponent,
    NzListItemComponent,
    NzSkeletonComponent,
    NzPaginationComponent,
    NzEmptyComponent,

    NzMenuDirective,
    NzMenuItemDirective,
    NzIconDirective,
    NzPageHeaderContentDirective
  ]
})
export class NgZorroModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgZorroModule,
      providers: [{ provide: NZ_I18N, useValue: zh_TW }],
    } as ModuleWithProviders;
  }
}
