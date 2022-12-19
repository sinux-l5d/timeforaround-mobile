import { Component, Input, OnInit } from "@angular/core";
import { UserDto } from "src/app/services/api.service";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input()
  user?: UserDto;

  isCompleted() {
    if (!this.user) return false;
    return this.user.roundsCount === this.user.roundsPaid;
  }

  constructor() {}

  ngOnInit() {}
}
