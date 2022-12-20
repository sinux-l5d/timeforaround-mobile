import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoundsPage } from "./rounds.page";

const routes: Routes = [
  {
    path: "",
    component: RoundsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundsPageRoutingModule {}
