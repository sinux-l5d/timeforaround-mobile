import { Component, Input, OnInit } from "@angular/core";
import {
  ApiService,
  RoundAloneDto,
  RoundDto,
} from "src/app/services/api.service";

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

  @Input()
  username?: string;

  constructor(private api: ApiService) {}

  setPaid() {
    if (!this.round) return;
    if (!this.hasUsername(this.round) || this.username) return;
    this.api.setRoundAsPaid(
      this.round.username ?? this.username,
      this.round.id,
      !this.round.asBeenPaid,
    )
      .subscribe((res) => {
        if (res.status === 204 && this.round) {
          this.round.asBeenPaid = !this.round.asBeenPaid;
        }
      });
  }

  // typescript type guard
  protected hasUsername(
    round: RoundAloneDto | RoundDto,
  ): round is RoundAloneDto {
    return (round as RoundAloneDto).username !== undefined;
  }

  ngOnInit() {}
}
