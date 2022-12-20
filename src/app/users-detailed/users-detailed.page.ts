import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService, UserDetailedDto } from "../services/api.service";

@Component({
  selector: "app-users-detailed",
  templateUrl: "./users-detailed.page.html",
  styleUrls: ["./users-detailed.page.scss"],
})
export class UsersDetailedPage implements OnInit {
  protected user?: UserDetailedDto;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get("username");
    if (!username) return;

    this.api.getUserDetails(username).subscribe((user) => {
      this.user = user;
    });
  }
}
