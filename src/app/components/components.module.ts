import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { RoundCardComponent } from "./round-card/round-card.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RoundCardListComponent } from "./round-card-list/round-card-list.component";

@NgModule({
  declarations: [UserCardComponent, RoundCardComponent, RoundCardListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ],
  exports: [UserCardComponent, RoundCardComponent, RoundCardListComponent],
})
export class ComponentsModule {}
