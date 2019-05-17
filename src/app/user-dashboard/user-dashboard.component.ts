import { Component, OnInit, Input } from "@angular/core";
import { TripService } from "../trip.service";
import { AuthService } from "../auth-service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  trips: [];
  isAdmin: any;
  userId: any;
  userInfo: any;
  @Input("sessionToken") sessionToken: string;

  onRefresh() {
    this.ngOnInit()
    console.log('received event');
  }

  constructor(
    private data: TripService,
    private user: AuthService,
    private route: Router
  ) {
    this.isAdmin = sessionStorage.getItem("isAdmin");
    console.log(this.isAdmin);
    this.userId = sessionStorage.getItem("userId");
  }

  ngOnInit() {
    this.data.getMyTrips(this.userId, this.sessionToken).subscribe(data => {
      this.trips = data;
      this.trips.reverse();
      console.log(this.trips);
    });
  }
  goToAdmin() {
    this.route.navigate(["/admindashboard"]);
  }
}
