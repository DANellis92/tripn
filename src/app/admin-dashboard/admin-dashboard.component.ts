import { Component, OnInit, Input } from "@angular/core";
import { AdminService } from "../admin-service/admin-service.service";
import { Router } from "@angular/router";

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
  userTrips = [];

  constructor(private adminService: AdminService, private route: Router) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe(users => {
      this.adminUsers = users;
      console.log(this.adminUsers);
    });
  }
  getThisUsersTrips() {
    this.adminService.getTripsbyUser().subscribe(userTrips => {
      this.userTrips = userTrips;
      console.log(this.userTrips, this.adminUsers);
    });
  }
  deleteATrip(id, userId) {
    console.log(id, userId);
    this.adminService.tripDelete(id, userId).subscribe();
    this.getThisUsersTrips();
  }
  getUsers() {
    this.adminService.getUsers().subscribe(users => {
      this.adminUsers = users;
    });
  }
  deleteThisUser(id) {
    console.log(id);
    this.adminService.deleteUser(id).subscribe();
    this.getUsers();
  }
  backButton() {
    this.route.navigate(["/dashboard"]);
  }
}
