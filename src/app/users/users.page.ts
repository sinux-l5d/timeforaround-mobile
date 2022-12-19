import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs";
import { ApiService, UserDto } from "../services/api.service";

@Component({
  selector: "app-users",
  templateUrl: "users.page.html",
  styleUrls: ["users.page.scss"],
})
export class UsersPage implements OnInit {
  protected users: UserDto[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
