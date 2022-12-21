import { Component, OnInit } from "@angular/core";
import { ApiService, UserDto } from "../services/api.service";

@Component({
  selector: "app-users",
  templateUrl: "users.page.html",
  styleUrls: ["users.page.scss"],
})
export class UsersPage implements OnInit {
  protected users: UserDto[] = [];

  constructor(private api: ApiService) {}

  handleRefresh(event: any) {
    this.reloadUsers((users) => event.target.complete());
  }

  reloadUsers(callback: ((users: UserDto[]) => void) | null = null) {
    this.api.getAllUsers().subscribe((users) => {
      this.users = users;
      callback?.(users);
    });
  }

  ngOnInit() {
    this.reloadUsers();
  }
}
