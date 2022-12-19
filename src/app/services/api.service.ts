import { HttpClient, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export type UserDto = {
  username: string;
  roundsCount: number;
  roundsPaid: number;
};

export type UserDetailedDto = {
  username: string;
  rounds: RoundDto[];
};

export type RoundDto = {
  id: string;
  reason: string;
  occurredAt: Date;
  reportedAt: Date;
  asBeenPaid: boolean;
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly apiBaseUrl = environment.api_url;

  constructor(private http: HttpClient) {}

  private get<T>(path: string) {
    return this.http.get<T>(this.apiBaseUrl + path);
  }

  private post<T>(path: string, body: Record<string, unknown>) {
    return this.http.post<T>(this.apiBaseUrl + path, body);
  }

  public getAllUsers() {
    return this.get<UserDto[]>("/users");
  }

  public getUserDetails(username: string) {
    return this.get<UserDetailedDto>(`/users/${username}`);
  }

  public getRoundOfUser(username: string, roundId: string) {
    return this.get<RoundDto>(`/users/${username}/rounds/${roundId}`);
  }
}
