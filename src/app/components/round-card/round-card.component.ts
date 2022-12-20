import { Component, Input, OnInit } from "@angular/core";
import { RoundAloneDto } from "src/app/services/api.service";

@Component({
  selector: "app-round-card",
  templateUrl: "./round-card.component.html",
  styleUrls: ["./round-card.component.scss"],
})
export class RoundCardComponent implements OnInit {
  @Input()
  round?: RoundAloneDto;

  @Input()
  showUser: boolean = true;

  constructor() {}

  ngOnInit() {}
}
