import { Component, OnInit, Input } from "@angular/core";
import { TripService } from "../trip.service";
import { AuthService } from "../auth-service/auth.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"]
})
export class UserDashboardComponent implements OnInit {
  trips: Object;
  isAdmin: any;
  userId: any;
  @Input("sessionToken") sessionToken: string;

  constructor(private data: TripService, private user: AuthService) {
    this.isAdmin = sessionStorage.getItem("isAdmin");
    console.log(typeof this.isAdmin);
    this.userId = sessionStorage.getItem("userId");
  }

  ngOnInit() {
    this.data.getMyTrips(this.userId, this.sessionToken).subscribe(data => {
      this.trips = data;
      console.log(this.trips);
    });
  }
}
