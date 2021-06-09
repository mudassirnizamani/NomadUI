import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexLayoutComponent } from './blocks/layouts/index-layout/index-layout.component';
import { IndexComponent } from './features/index/components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: AdminIndexLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
