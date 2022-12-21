import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { ApiService } from "../services/api.service";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"],
})
export class ProfilePage implements OnInit {
  private _username?: string;
  protected userExists = Promise.resolve(false);

  get username(): string {
    return this._username ?? "";
  }

  set username(username: string) {
    username = username.trim().toLocaleLowerCase();
    if (username === this._username) {
      return;
    }
    this.configService.setUsername(username);
    this.userExists = this.api.userExists(username);
    this._username = username;
  }

  constructor(private configService: ConfigService, private api: ApiService) {}

  createUser() {
    this.api.createUser(this.username).subscribe((_) => {
      this.userExists = Promise.resolve(true);
    });
  }

  ngOnInit(): void {
    this.configService.getConfig().then((config) => {
      if (config) {
        this.userExists = this.api.userExists(config.username);
        this._username = config.username;
      }
    });
  }
}
