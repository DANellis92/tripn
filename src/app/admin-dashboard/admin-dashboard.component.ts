import { Component, OnInit, Input } from "@angular/core";
import { AdminService } from "../admin-service/admin-service.service";
@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  @Input("isAdmin") isAdmin: "";
  @Input("sessionToken") sessionToken: string;
  panelOpenState = false;
  adminUsers = [];
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getUsers(this.sessionToken).subscribe(users => {
      this.adminUsers = users;
      console.log(this.adminUsers);
    });
  }
}
