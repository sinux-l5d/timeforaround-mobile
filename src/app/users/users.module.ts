import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UsersPage } from "./users.page";

import { UsersPageRoutingModule } from "./users-routing.module";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UsersPage],
})
export class UsersPageModule {}
