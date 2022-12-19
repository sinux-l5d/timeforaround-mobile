import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersPageModule),
  },
  {
    path: "tab2",
    loadChildren: () =>
      import("./tab2/tab2.module").then((m) => m.Tab2PageModule),
  },
  {
    path: "tab3",
    loadChildren: () =>
      import("./tab3/tab3.module").then((m) => m.Tab3PageModule),
  },
  {
    path: "",
    redirectTo: "/users",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
