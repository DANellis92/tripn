import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { TripService } from "../trip.service";
import { AuthService } from "../auth-service/auth.service";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;
  trips: [];
  isAdmin: any;
  userId: any;
  fullName: any;
  @Input("sessionToken") sessionToken: string;

  onRefresh() {
    this.ngOnInit();
    console.log("received event");
  }

  constructor(
    private data: TripService,
    private user: AuthService,
    private route: Router
  ) {
    this.isAdmin = sessionStorage.getItem("isAdmin");
    console.log(this.isAdmin);
    this.userId = sessionStorage.getItem("userId");
    this.fullName = sessionStorage.getItem("fullName");
  }

  ngOnInit() {
    this.data.getMyTrips(this.userId, this.sessionToken).subscribe(data => {
      this.trips = data;

      console.log(this.trips);
    });
  }
  goToAdmin() {
    this.route.navigate(["/admindashboard"]);
  }
  logOutBruh() {
    sessionStorage.clear();
    this.route.navigate(["/"]);
  }
  close() {
    this.sidenav.close();
  }
}
