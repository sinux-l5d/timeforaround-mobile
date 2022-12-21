import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, map, shareReplay } from "rxjs";
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

export type RoundAloneDto = RoundDto & {
  username: string;
};

export type RoundNewDto = Omit<RoundDto, "id" | "reportedAt" | "asBeenPaid">;

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

  private patch<T>(path: string, body: Record<string, unknown>) {
    return this.http.patch<T>(this.apiBaseUrl + path, body, {
      observe: "response",
    });
  }

  public getAllUsers() {
    return this.get<UserDto[]>("/users");
  }

  public async userExists(username: string) {
    if (!username) return false;
    const users = await lastValueFrom(this.getAllUsers());
    return users.some((user) => user.username === username);
  }

  public getUserDetails(username: string) {
    return this.get<UserDetailedDto>(`/users/${username}`).pipe(
      map((user) => {
        user.rounds = this.defaultSortRounds(user.rounds);
        return user;
      }),
    );
  }

  public createUser(username: string) {
    const obs$ = this.post<UserDto>("/users", { username }).pipe(shareReplay());
    obs$.subscribe();
    return obs$;
  }

  public getRoundOfUser(username: string, roundId: string) {
    return this.get<RoundDto>(`/users/${username}/rounds/${roundId}`);
  }

  public getAllRounds() {
    return this.get<RoundAloneDto[]>("/rounds").pipe(
      map((rounds) => this.defaultSortRounds(rounds)),
    );
  }

  public addRound(username: string, round: RoundNewDto) {
    const RoundDto = { ...round, occurredAt: round.occurredAt.toISOString() };
    console.log("New round:", RoundDto);
    const obs$ = this.post<RoundDto>(
      `/users/${username}/rounds`,
      round,
    ).pipe(shareReplay());
    obs$.subscribe(console.log);
    return obs$;
  }

  public setRoundAsPaid(
    username: string,
    roundId: string,
    asBeenPaid: boolean = true,
  ) {
    const obs$ = this.patch<never>(
      `/users/${username}/rounds/${roundId}`,
      { asBeenPaid },
    ).pipe(shareReplay());
    obs$.subscribe();
    return obs$;
  }

  public defaultSortRounds<T extends RoundAloneDto[] | RoundDto[]>(rounds: T) {
    rounds.sort((a, b) => b.reportedAt.getTime() - a.reportedAt.getTime());
    return rounds;
  }
}
