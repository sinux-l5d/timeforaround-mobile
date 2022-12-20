import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { RoundCardComponent } from "./round-card/round-card.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserCardComponent, RoundCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ],
  exports: [UserCardComponent, RoundCardComponent],
})
export class ComponentsModule {}
