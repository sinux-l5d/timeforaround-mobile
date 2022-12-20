import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UsersPage } from "./users.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { UsersPageRoutingModule } from "./users-routing.module";
import { UserCardComponent } from "../components/user-card/user-card.component";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UsersPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [UsersPage],
})
export class UsersPageModule {}
