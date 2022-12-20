import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDetailedPage } from './users-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: UsersDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersDetailedPageRoutingModule {}
