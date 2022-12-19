import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-users",
  templateUrl: "users.page.html",
  styleUrls: ["users.page.scss"],
})
export class UsersPage implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUserDetails("sinux").subscribe((user) => {
      console.log("user: ", user);
    });
  }
}
