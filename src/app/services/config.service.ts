import { Injectable, OnInit } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { BehaviorSubject, ReplaySubject, tap } from "rxjs";

export type Config = {
  username: string;
};

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  constructor() {}

  public async getConfig(): Promise<Config | undefined> {
    const config = (await Preferences.get({ key: "config" })).value;
    if (!config) {
      return undefined;
    }

    return JSON.parse(config);
  }

  private async setConfig(config: Config): Promise<void> {
    await Preferences.set({ key: "config", value: JSON.stringify(config) });
  }

  public async setUsername(username: string) {
    const config = await this.getConfig();

    if (!config) {
      await this.setConfig({ username });
      return;
    }

    if (username === config.username) return;
    await this.setConfig({ ...config, username });
  }
}
