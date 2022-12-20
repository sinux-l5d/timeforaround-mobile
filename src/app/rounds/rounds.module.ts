import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RoundsPage } from "./rounds.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";

import { RoundsPageRoutingModule } from "./rounds-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RoundsPageRoutingModule,
  ],
  declarations: [RoundsPage],
})
export class RoundsPageModule {}
