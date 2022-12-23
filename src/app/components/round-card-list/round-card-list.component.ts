import { Component, Input, OnInit } from "@angular/core";
import { RoundAloneDto, RoundDto } from "src/app/services/api.service";

@Component({
  selector: "app-round-card-list",
  templateUrl: "./round-card-list.component.html",
  styleUrls: ["./round-card-list.component.scss"],
})
export class RoundCardListComponent implements OnInit {
  @Input()
  rounds?: RoundAloneDto[] | RoundDto[] | undefined;

  @Input()
  username?: string = undefined;

  @Input()
  showUser = true;

  constructor() {}

  ngOnInit() {}
}
