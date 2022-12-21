import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RoundsPage } from "./rounds.page";

import { RoundsPageRoutingModule } from "./rounds-routing.module";
import { ComponentsModule } from "../components/components.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoundsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RoundsPage],
})
export class RoundsPageModule {}
