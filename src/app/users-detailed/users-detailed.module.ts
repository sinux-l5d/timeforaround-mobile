import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UsersDetailedPageRoutingModule } from "./users-detailed-routing.module";

import { UsersDetailedPage } from "./users-detailed.page";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersDetailedPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UsersDetailedPage],
})
export class UsersDetailedPageModule {}
