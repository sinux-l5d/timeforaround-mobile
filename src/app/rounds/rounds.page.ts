import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import {
  ApiService,
  RoundAloneDto,
  RoundNewDto,
} from "../services/api.service";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-rounds",
  templateUrl: "rounds.page.html",
  styleUrls: ["rounds.page.scss"],
})
export class RoundsPage implements OnInit {
  protected rounds?: RoundAloneDto[];

  constructor(
    private api: ApiService,
    private alertCtrl: AlertController,
    private configService: ConfigService,
  ) {}

  async addRound() {
    const username = (await this.configService.getConfig())?.username;
    let alert: HTMLIonAlertElement;

    if (!username || !(await this.api.userExists(username))) {
      alert = await this.alertCtrl.create({
        header: "Not registered",
        message:
          "Looks like you are not registered yet... Do so in the Profile tab!",
        buttons: ["OK"],
      });
    } else {
      alert = await this.alertCtrl.create({
        header: "Add a new round",
        inputs: [
          {
            name: "reason",
            type: "text",
            placeholder: "Reason",
          },
          {
            name: "occurredAt",
            type: "date",
            placeholder: "Date on which it occurred",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Add",
            handler: (data) => {
              const newRound: RoundNewDto = {
                reason: data.reason,
                occurredAt: new Date(data.occurredAt),
              };
              this.api.addRound(username, newRound).subscribe((round) => {
                this.pushRound({ ...round, username });
              });
            },
          },
        ],
      });
    }
    await alert.present();
  }

  handleRefresh(event: any) {
    this.api.getAllRounds().subscribe((rounds) => {
      this.rounds = rounds;
      event.target.complete();
    });
  }

  private pushRound(round: RoundAloneDto) {
    this.rounds?.unshift(round);
  }

  ngOnInit() {
    this.api.getAllRounds().subscribe((rounds) => {
      this.rounds = rounds;
    });
  }
}
