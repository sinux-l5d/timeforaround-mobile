import { Component, OnInit } from "@angular/core";
import { ApiService, RoundAloneDto } from "../services/api.service";

@Component({
  selector: "app-tab2",
  templateUrl: "rounds.page.html",
  styleUrls: ["rounds.page.scss"],
})
export class RoundsPage implements OnInit {
  protected rounds?: RoundAloneDto[];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllRounds().subscribe((rounds) => {
      this.rounds = rounds;
    });
  }
}
