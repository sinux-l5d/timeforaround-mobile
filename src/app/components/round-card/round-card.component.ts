import { Component, Input, OnInit } from "@angular/core";
import { RoundAloneDto, RoundDto } from "src/app/services/api.service";

@Component({
  selector: "app-round-card",
  templateUrl: "./round-card.component.html",
  styleUrls: ["./round-card.component.scss"],
})
export class RoundCardComponent implements OnInit {
  @Input()
  round?: RoundAloneDto | RoundDto;

  @Input()
  showUser: boolean = true;

  // typescript type guard
  protected hasUsername(
    round: RoundAloneDto | RoundDto,
  ): round is RoundAloneDto {
    return (round as RoundAloneDto).username !== undefined;
  }

  constructor() {}

  ngOnInit() {}
}
